'use strict';

/* App Module */

var app = angular.module('ctsweb', ['ui.bootstrap']);

//app.directive('ngTest', function() {
//    return function(scope, element, attrs) {
//        element.html(':(');
////        element.css('display', 'none');
////        scope.$watch(attrs.ngTest, function(value) {
////            if (value) {
////                element.fadeIn(200);
////            }
////            else {
////                element.fadeOut(100);
////            }
////        });
//    }
//});

//angular.module('ctsweb').directive('hello', function() {
//    return {
//        restrict: 'E',
//        template: '<button>Hello Button</button>',
//        replace: true,
//        compile: function(element) {
//            element.bind('click', function() {
//                alert('Hello AngularJS!');
//            });
//        }
//    }
//});


app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {templateUrl: 'inicio.html'}).
        when('/discografia', {templateUrl: 'discografia.html'}).
//        when('/conciertos', {templateUrl: 'conciertos.html'}).
        when('/informacion', {templateUrl: 'informacion.html'}).
        otherwise({redirectTo: '/'});
}]);