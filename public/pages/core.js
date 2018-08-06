var otfApp = angular.module('otfApp', []);

otfApp.controller('otfController', ['$scope', '$http', function($scope, $http) {
    $scope.user = "Sushma";
    $scope.class_options = ["Endurance", "Strength", "Power", "ESP", "Special"];
    $scope.data_obj ={};
    $http.get('/loadSuma').
    then(function(success){
        $scope.data_obj = success.data;
        $scope.addEntry = function(){
            $scope.data_obj.push($scope.class);
        }      
    });       
}]);
