'use strict';

/* App Module */

//angular.module('phonecat', ['phonecatFilters', 'phonecatServices']).
//  config(['$routeProvider', function($routeProvider) {
//  $routeProvider.
//      when('/phones', {templateUrl: 'partials/phone-list.html',   controller: PhoneListCtrl}).
//      when('/phones/:phoneId', {templateUrl: 'partials/phone-detail.html', controller: PhoneDetailCtrl}).
//      otherwise({redirectTo: '/phones'});
//}]);

var app = angular.module('ctsweb', []);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {templateUrl: 'partials/home.html'}).
        when('/discografia', {templateUrl: 'partials/discografia.html'}).
        when('/conciertos', {templateUrl: 'partials/conciertos.html'}).
        otherwise({redirectTo: '/'});
}]);
//app.controller('MainCtrl', function($scope) {
//    $scope.name = 'World';
//});

app.controller('Controller', function($scope){
    $scope.test = true;
    $scope.toggle = function(){ $scope.test = !$scope.test;  };
});

app.directive('ngShow2', function(){
    return {
        replace: true,
        restrict: 'A',
        link: function(scope, elem, attr) {
            scope.$watch(attr.ngShow2, function(val) {
                elem.css('display', value ? '' : 'none');
            });
        }
    };
});
