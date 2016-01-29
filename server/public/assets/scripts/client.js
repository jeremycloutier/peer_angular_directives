var app = angular.module('peerApp', ['ngAnimate']);

app.controller('MainController', ['$scope', function($scope){
    $scope.count = 0;
    $scope.secondcount = 0;

    $scope.foods = ['Soup', 'Salad', 'Sandwich'];
    $scope.selection = $scope.foods[0];
}]);