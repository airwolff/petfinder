var app = angular.module('app', []);

app.controller('BarnController', ['$http', function($http) {
  console.log('BarnController is a go!');
  self.message = "Barn!"
}]);
