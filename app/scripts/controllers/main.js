'use strict';

resourceExampleApp.controller('MainCtrl', ['$scope', 'Product', function($scope, Product) {
  $scope.products = Product.query();

  $scope.newProduct = {};

  $scope.create = function() {
    var product = Product.save($scope.newProduct);
    $scope.products.push(product);
    $scope.newProduct = {};
  };
}]);
