var app = angular.module('app', ['ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/dog', {
            templateUrl: '/views/templates/dog.html',
            controller: 'DogController',
            controllerAs: 'dog',
        })
        .when('/cat', {
            templateUrl: '/views/templates/cat.html',
            controller: 'CatController',
            controllerAs: 'cat',
        })
        .when('/barn', {
            templateUrl: '/views/templates/barn.html',
            controller: 'BarnController',
            controllerAs: 'barn',
        })
        .otherwise({
      redirectTo: 'dog'
});
}, ]);
