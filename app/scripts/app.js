'use strict';

var chatApp =angular.module('chatApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'btford.socket-io'
])
  .config(function ($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'partials/login',
        controller: 'LoginCtrl'
      })
      .when('/signup', {
        templateUrl: 'partials/signup',
        controller: 'SignupCtrl'
      })
      .when('/settings', {
        templateUrl: 'partials/settings',
        controller: 'SettingsCtrl',
        authenticate: true
      })
       .when('/settings2', {
        templateUrl: 'partials/settings2',
        controller: 'Settings2Ctrl',
        authenticate: true
      })
       .when('/profile', {
        templateUrl: 'partials/profile',
        controller: 'ProfileCtrl'
       
      })
       .when('/home', {
        templateUrl: 'partials/homepage',
        controller: 'HomeCtrl'
       
      })
      .otherwise({
        redirectTo: '/'
      });
      
    $locationProvider.html5Mode(true);

    // Intercept 401s and redirect you to login
    $httpProvider.interceptors.push(['$q', '$location', function($q, $location) {
      return {
        'responseError': function(response) {
          if(response.status === 401) {
            $location.path('/login');
            return $q.reject(response);
          }
          else {
            return $q.reject(response);
          }
        }
      };
    }]);
  })
  .run(function ($rootScope, $location, Auth) {
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$routeChangeStart', function (event, next) {

      if (next.authenticate && !Auth.isLoggedIn()) {
        $location.path('/login');
      }
    });
  });



chatApp.controller('StarCtrl', ['$scope', function ($scope) {
    $scope.rating = 0;
    $scope.ratings = [{
        current: 5,
        max: 5
    }];

    $scope.getSelectedRating = function (rating) {
        console.log(rating);
    }
    
    $scope.setMinrate= function(){
       $scope.ratings = [{
        current: 1,
        max: 10
    }, {
        current: 1,
        max: 5
    }];
    }
    
    $scope.setMaxrate= function(){
       $scope.ratings = [{
        current: 10,
        max: 10
    }, {
        current: 5,
        max: 5
    }];
  }
  
  $scope.sendRate = function(){
    alert("Thanks for your rates!\n\nFirst Rate: " + $scope.ratings[0].current+"/"+$scope.ratings[0].max
    +"\n"+"Second rate: "+ $scope.ratings[1].current+"/"+$scope.ratings[0].max)
  }
}]);

chatApp.directive('starRating', function () {
    return {
        restrict: 'A',
        template: '<ul class="rating">' +
            '<li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">' +
            '\u2605' +
            '</li>' +
            '</ul>',
        scope: {
            ratingValue: '=',
            max: '=',
            onRatingSelected: '&'
        },
        link: function (scope, elem, attrs) {

            var updateStars = function () {
                scope.stars = [];
                for (var i = 0; i < scope.max; i++) {
                    scope.stars.push({
                        filled: i < scope.ratingValue
                    });
                }
            };

            scope.toggle = function (index) {
                scope.ratingValue = index + 1;
                scope.onRatingSelected({
                    rating: index + 1
                });
            };

            scope.$watch('ratingValue', function (oldVal, newVal) {
                if (newVal) {
                    updateStars();
                }
            });
        }
    }
});