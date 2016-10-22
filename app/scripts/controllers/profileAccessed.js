'use strict';


angular.module('chatApp')
  .controller('ProfileCtrl', function ($scope, chatroom,$rootScope) {
    $scope.getMessages = chatroom.getMessages;
    $scope.getVisitors = chatroom.getVisitors;
  //$rootScope.currentUser  This holds the current users data
  $scope.user=$rootScope.currentUser
console.log("this is the user name " +  $rootScope.currentUser.name)
    $scope.sendMessage = function () {
      if(!$scope.newMessage) {
        return;
      }

      chatroom.sendMessage($scope.newMessage);
      $scope.newMessage = '';
    };
  });