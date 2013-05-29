'use strict';

/* Directives */
angular.module('ctsweb', ['ui.bootstrap']);

angular.module('ctsweb').directive('hello', function() {
    return {
        restrict: 'E',
        template: '<button>Hello Button</button>',
        replace: true,
        compile: function(element) {
            element.bind('click', function() {
                alert('Hello AngularJS!');
            });
            element.html('ola ke ase');
        }
    }
});
angular.module('ctsweb').directive('focusable', function() {
    return {
        restrict: 'A',
        compile: function(element, attrs) {
            element.bind('focus', function() {
                element.addClass('focused');
                element.attr('placeholder', 'Haz clikc fuera');
//                element.val(attrs.ngcontent);
            });
            element.bind('blur', function() {
                element.removeClass('focused');
                element.attr('placeholder', 'Haz clikc aquí');
            });
//            scope.$watch(attrs.ngcontent, function(val) {
//                element.val(val);
//            });
        }
    }
});
angular.module('ctsweb').directive('ngcontent', function($http) {
    return function(scope, element, attrs) {
//        var url = 'template/mine/'+attrs.ngcontent;
        var url = 'http://ctts_server.eastolfi.c9.io/discos';
        $http({
            method: 'GET', url: url, contentType: 'jsonp'
        }).success(function(data) {
                alert(JSON.parse(data[0]));
                element.html(data);
            });
    }
});

//angular.module('ctsweb').directive('dirTest', function() {
//    return {
//        restrict: 'A',
//        compile: function(scope, element, attrs) {
////            element.css('display', 'none');
////            scope.$watch(attrs.ng-test)
//              element.attr('placeholder', attrs);
//        }
//    }
//});

//app.directive('ngTest', function() {
//    return function(scope, element, attrs) {
//        element.css('display', 'none');
//        scope.$watch(attrs.ngTest, function(value) {
//            if (value) {
//                element.fadeIn(200);
//            }
//            else {
//                element.fadeOut(100);
//            }
//        });
//    }
//});

//app.directive('test', function($compile) {
//    var template = '<div>ola ke ase</div>';
//
//    var linker = function(scope, elem, attrs) {
//        elem.html(template).show();
//    };
//
//    return {
//        restrict: 'A',
//        replace: true,
//        link: linker,
//        scope: {
//            content: '='
//        }
//    };
//});

//app.directive('contentItem', function ($compile) {
//    var imageTemplate = '<div class="entry-photo"><h2>&nbsp;</h2><div class="entry-img"><span><a href="{{rootDirectory}}{{content.data}}"><img ng-src="{{rootDirectory}}{{content.data}}" alt="entry photo"></a></span></div><div class="entry-text"><div class="entry-title">{{content.title}}</div><div class="entry-copy">{{content.description}}</div></div></div>';
//    var videoTemplate = '<div class="entry-video"><h2>&nbsp;</h2><div class="entry-vid"><iframe ng-src="{{content.data}}" width="280" height="200" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div><div class="entry-text"><div class="entry-title">{{content.title}}</div><div class="entry-copy">{{content.description}}</div></div></div>';
//    var noteTemplate = '<div class="entry-note"><h2>&nbsp;</h2><div class="entry-text"><div class="entry-title">{{content.title}}</div><div class="entry-copy">{{content.data}}</div></div></div>';
//
//    var getTemplate = function(contentType) {
//        var template = '';
//
//        switch(contentType) {
//            case 'image':
//                template = imageTemplate;
//                break;
//            case 'video':
//                template = videoTemplate;
//                break;
//            case 'notes':
//                template = noteTemplate;
//                break;
//        }
//
//        return template;
//    }
//
//    var linker = function(scope, element, attrs) {
//        scope.rootDirectory = 'images/';
//
//        element.html(getTemplate(scope.content.content_type)).show();
//
//        $compile(element.contents())(scope);
//    }
//
//    return {
//        restrict: "E",
//        rep1ace: true,
//        link: linker,
//        scope: {
//            content:'='
//        }
//    };
//})