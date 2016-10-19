'use strict';


angular.module('chatApp')
  .controller('MainCtrl', function ($scope, chatroom, $mdDialog) {
    $scope.getMessages = chatroom.getMessages;
    $scope.getVisitors = chatroom.getVisitors;
     $scope.status = '  ';
  $scope.customFullscreen = false;

  

  $scope.showConfirm = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.confirm()
          .title('Would you like visit profile?')
          .textContent('Body')
          .ariaLabel('Lucky day')
          .targetEvent(ev)
          .ok('Sure!')
          .cancel('No');

    $mdDialog.show(confirm).then(function() {
      $scope.status = 'You decided to visit the profile.';
    }, function() {
      $scope.status = 'You decided to not visit.';
    });
  };

 

  function DialogController($scope, $mdDialog) {
    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  }
$scope.showDetails = function(y, ev) {
     //use y here
     var confirm = $mdDialog.confirm()
          .title('Would you like to visit ' + y)
          .textContent('Body')
          .ariaLabel('Lucky day')
          .targetEvent(ev)
          .ok('Sure!')
          .cancel('No');

    $mdDialog.show(confirm).then(function() {
      $scope.status = 'You decided to visit the profile.';
    }, function() {
      $scope.status = 'You decided to not visit.';
    });
     console.log("this is the clicked text " + y)
    
}
    $scope.sendMessage = function () {
      if(!$scope.newMessage) {
        return;
      }

      chatroom.sendMessage($scope.newMessage);
      $scope.newMessage = '';
    };
  });