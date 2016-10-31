'use strict';


angular.module('chatApp')
 .config(function($mdIconProvider) {
  $mdIconProvider
    .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
    .iconSet('device', 'img/icons/sets/device-icons.svg', 24)
    .iconSet('communication', 'img/icons/sets/communication-icons.svg', 24)
    .defaultIconSet('img/icons/sets/core-icons.svg', 24);
})

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
          .title('Would you like to visit ' + y+ "'s profile")
          .textContent('')
          .ariaLabel('Lucky day')
          .targetEvent(ev)
          .ok('Sure!')
          .cancel('No');

    $mdDialog.show(confirm).then(function() {
      /*
          The user decided to visit so route to the profile page of the specific user
          
      */
      $scope.status = 'You decided to visit ' + y+"'s profile";
    }, function() {
      $scope.status = 'You decided to not visit.';
    });
   /*
    Route the user to this users page
   */
    
}
    $scope.sendMessage = function () {
      if(!$scope.newMessage) {
        return;
      }

      chatroom.sendMessage($scope.newMessage);
      $scope.newMessage = '';
    };

  

 

  /*$scope.messages = [
    {id: 1, title: "Message A", selected: false},
    {id: 2, title: "Message B", selected: true},
    {id: 3, title: "Message C", selected: true},
  ];
*/

$scope.messages = chatroom.getMessages;
$scope.people = chatroom.getMessages

  /*$scope.people = [
    { name: 'Janet Perkins', img: 'img/100-0.jpeg', newMessage: true },
    { name: 'Mary Johnson', img: 'img/100-1.jpeg', newMessage: false },
    { name: 'Peter Carlsson', img: 'img/100-2.jpeg', newMessage: false }
  ];*/

  $scope.goToPerson = function(person, event) {
    $mdDialog.show(
      $mdDialog.alert()
        .title('Navigating')
        .textContent('Inspect ' + person)
        .ariaLabel('Person inspect demo')
        .ok('Neat!')
        .targetEvent(event)
    );
  };

  $scope.navigateTo = function(to, event) {
    $mdDialog.show(
      $mdDialog.alert()
        .title('Navigating')
        .textContent('Imagine being taken to ' + to)
        .ariaLabel('Navigation demo')
        .ok('Neat!')
        .targetEvent(event)
    );
  };

  $scope.doPrimaryAction = function(event) {
    $mdDialog.show(
      $mdDialog.alert()
        .title('Primary Action')
        .textContent('Primary actions can be used for one click actions')
        .ariaLabel('Primary click demo')
        .ok('Awesome!')
        .targetEvent(event)
    );
  };

  $scope.doSecondaryAction = function(event) {
    $mdDialog.show(
      $mdDialog.alert()
        .title('Secondary Action')
        .textContent('Secondary actions can be used for one click actions')
        .ariaLabel('Secondary click demo')
        .ok('Neat!')
        .targetEvent(event)
    );
  };




  });

