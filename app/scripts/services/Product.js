'use strict';

resourceExampleApp.factory('Product', ['$resource', function($resource) {
  var Product = $resource('http://localhost:port/products/:id', {port: '\:3000'}, {});

  return Product;
}]);
