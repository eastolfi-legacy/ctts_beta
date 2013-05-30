'use strict';

/* App Module */

var app = angular.module('ctsweb', ['ui.bootstrap']);


var generalController = app.controller('GeneralController', function($scope){
    $scope.setTitle = function(title) {
        $scope.title = title;
    }
});

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {templateUrl: 'inicio.html'}).
        when('/discografia', {templateUrl: 'discografia.html'}).
//        when('/conciertos', {templateUrl: 'conciertos.html'}).
        when('/informacion', {templateUrl: 'informacion.html'}).
        otherwise({redirectTo: '/'});
    }],
    ['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }]
);