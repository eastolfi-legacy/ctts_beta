'use strict';

/* App Module */

//angular.module('phonecat', ['phonecatFilters', 'phonecatServices']).
//  config(['$routeProvider', function($routeProvider) {
//  $routeProvider.
//      when('/phones', {templateUrl: 'partials/phone-list.html',   controller: PhoneListCtrl}).
//      when('/phones/:phoneId', {templateUrl: 'partials/phone-detail.html', controller: PhoneDetailCtrl}).
//      otherwise({redirectTo: '/phones'});
//}]);

var app = angular.module('ctsweb', ['ui.bootstrap']);


var generalController = app.controller('GeneralController', function($scope){
    $scope.setTitle = function(title) {
        $scope.title = title;
    }

//    $scope.toggle = function(){ $scope.test = !$scope.test;  };
});

//generalController.$inject(['$scope', 'title']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {templateUrl: 'inicio.html'}).
        when('/discografia', {templateUrl: 'discografia.html'}).
//        when('/conciertos', {templateUrl: 'partials/conciertos.html'}).
        otherwise({redirectTo: '/'});
}]);
//app.controller('MainCtrl', function($scope) {
//    $scope.name = 'World';
//});

//app.directive('ngShow2', function(){
//    return {
//        replace: true,
//        restrict: 'A',
//        link: function(scope, elem, attr) {
//            scope.$watch(attr.ngShow2, function(val) {
//                elem.css('display', value ? '' : 'none');
//            });
//        }
//    };
//});
