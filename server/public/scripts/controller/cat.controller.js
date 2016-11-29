var app = angular.module('app', []);

app.controller('CatController', ['$http', function($http) {
  console.log('CatController is a go!');
  self.message = "Cat!"
}]);
