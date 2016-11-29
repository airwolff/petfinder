var app = angular.module('app', ['ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/dogs', {
            templateUrl: '/views/templates/dog.html',
            controller: 'DogController',
            controllerAs: 'dog',
        })
        .when('/cats', {
            templateUrl: '/views/templates/cat.html',
            controller: 'CatController',
            controllerAs: 'cat',
        })
        .when('/barn', {
            templateUrl: '/views/templates/barn.html',
            controller: 'BarnController',
            controllerAs: 'barn',
        })
}, ]);
