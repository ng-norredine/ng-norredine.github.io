var formApp = angular.module('formApp', []);

formApp.controller('RegistrationController', ['$scope', function($scope) {

  $scope.register = function() {
    $scope.message = 'Bienvenue ' + $scope.user.firstname;
  };

}]);

var masonry = angular.module('masonryApp', ['wu.masonry'])
    masonry.controller('angular-demo', function ($scope) {
        function genBrick() {
            var height = ~~(Math.random() * 500) + 100;
            var id = ~~(Math.random() * 10000);
            return {
                src: 'http://lorempixel.com/310/' + height + '/?' + id
            };
        };

        $scope.bricks = [
            genBrick(),
            genBrick(),
            genBrick(),
            genBrick(),
            genBrick()
        ];

        $scope.add = function add() {
            $scope.bricks.push(genBrick());
        };

        $scope.remove = function remove() {
            $scope.bricks.splice(
                ~~(Math.random() * $scope.bricks.length),
                1
            )
        };
    });
    angular.bootstrap(document.getElementById("form-validation"),['formApp']);
