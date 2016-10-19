'use strict';


angular.module('chatApp')
  .controller('MainCtrl', function ($scope, chatroom) {
    $scope.getMessages = chatroom.getMessages;
    $scope.getVisitors = chatroom.getVisitors;
$scope.showDetails = function(y) {
     //use y here
     
     console.log("this is the clicked text " + y)
     alert(y);
}
    $scope.sendMessage = function () {
      if(!$scope.newMessage) {
        return;
      }

      chatroom.sendMessage($scope.newMessage);
      $scope.newMessage = '';
    };
  });