var otfApp = angular.module('otfApp', []);

otfApp.controller('otfController', ['$scope', '$http', function($scope, $http) {
    $scope.user = "Sushma";
    $scope.class_options = ["Endurance", "Strength", "Power", "ESP", "Special"];
    $scope.data_obj ={};
    $scope.getWeather = function(){
       /*$http.get("https://samples.openweathermap.org/data/2.5/weather?q=London&appid=b6907d289e10d714a6e88b30761fae22").
        then(function(success){
            $scope.data_obj = success.data;
            $scope.addEntry = function(){
                $scope.data_obj.push($scope.class);
            }      
        });*/
    }
    /*$http.get('/loadSuma').
    then(function(success){
        $scope.data_obj = success.data;
        $scope.addEntry = function(){
            $scope.data_obj.push($scope.class);
        }      
    }); */      
}]);

var weatherApp = angular.module('weatherApp',[]);

weatherApp.controller('weatherController', ['$scope', '$http', function($scope, $http){
    $scope.getWeather = function(){
        $http.get("/updateWeather").
        then(function(success){
            console.log(success.data);
        })
    }
}]);

