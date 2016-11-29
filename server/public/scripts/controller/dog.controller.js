var app = angular.module('app', []);

app.controller('DogController', ['$http', function($http) {
  console.log('DogController is awesome!');
  self.message = "Dogs!"
}]);
