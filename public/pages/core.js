var otfApp = angular.module('otfApp', []);

otfApp.controller('otfController', ['$scope', '$http', function($scope, $http) {
    $scope.test = "Suma";
    $scope.data_obj = {};
    $http.get('/loadSuma').
    then(function(success){
        console.log(success);
        $scope.data_obj = success.data;
    });
}]);