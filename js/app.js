var formApp = angular.module('formApp', []);
    formApp.controller('RegistrationController', ['$scope', function($scope) {

        $scope.register = function() {
            $scope.message = 'Bienvenue ' + $scope.user.firstname;
        };

    }]);

var demoMasonry = angular.module('demoMasonry', ['angularGrid'])
    .service('imageService',['$q','$http',function($q,$http){
        this.loadImages = function(){
            return $http.jsonp("https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=JSON_CALLBACK");
        };
    }]);
    demoMasonry.controller('demo', ['$scope','imageService', 'angularGridInstance', function ($scope,imageService,angularGridInstance) {
        imageService.loadImages().then(function(data){
            data.data.items.forEach(function(obj){
                var desc = obj.description,
                    width = desc.match(/width="(.*?)"/)[1],
                    height = desc.match(/height="(.*?)"/)[1];

                obj.actualHeight  = height;
                obj.actualWidth = width;
            });
            $scope.pics = data.data.items;

        });;
    }]);
    angular.bootstrap(document.getElementById("form-validation"),['formApp']);