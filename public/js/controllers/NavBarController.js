angular.module('NavCtrl', []).
    controller('NavBarController', function($scope) {
        
        $scope.currentNavItem = '';
        
        $scope.goto = function() {
            console.log($scope.currentNavItem);  
        };
    });