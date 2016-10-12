 /*$scope.listOfOptions = ['One', 'Two', 'Three'];
  
  $scope.selectedItemChanged = function(){
    $scope.calculatedValue = 'You selected number ' + $scope.selectedItem;
  }
  */

  'use strict';


angular.module('chatApp')
  .controller('HomeCtrl', function ($scope) {
  $scope.options = ['var1', 'var2', 'var3'];
   
  });