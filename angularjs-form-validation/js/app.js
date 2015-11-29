var myApp = angular.module('myApp', []);

myApp.controller('RegistrationController', ['$scope', function($scope) {

  $scope.register = function() {
    $scope.message = 'Bienvenue ' + $scope.user.firstname;
  };

}]);
