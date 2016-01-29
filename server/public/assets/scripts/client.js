var app = angular.module('peerApp', []);

app.controller('MainController', ['$scope', function($scope){
    $scope.foods = ['Soup', 'Salad', 'Sandwich'];
    $scope.selection = $scope.foods[0];
}]);