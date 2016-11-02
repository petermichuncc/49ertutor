chatApp.controller('toolbarController', toolbarController);

         function toolbarController ($scope) {
            $scope.isOpen = false;
            $scope.count = 0;
			$scope.selectedDirection = 'left';          
         }    