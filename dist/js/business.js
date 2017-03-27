'use strict';
var app = angular.module('app', [
    'ui.router',
    'controller',
    'directive',
    'services',
    'templates'
]).config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
    .otherwise(function(inject, location) {
        var path = location.$$path || "";
        return '/index';
    })
    $stateProvider.state('module1', {
            url: "/module1",
            controller: "module1Ctrl",
            templateUrl: 'components/module_1/index.html'
    }).state('module2', {
            url: "/module2",
            controller: "module2Ctrl",
            templateUrl: 'components/module_2/index.html'
    }).state('module3', {
            url: "/module3",
            controller: "module3Ctrl",
            templateUrl: 'components/module_3/index.html'
    })

}]).run(['$rootScope', '$state', function(rootScope, state) {
    //初始化
}]);

angular.module('controller', []);
angular.module('directive', []);
angular.module('services', []);
angular.module('templates', []);

angular.module('controller')
    .controller('module1Ctrl', ['$scope', '$rootScope', '$http',  function($scope, $rootScope, $http) {
        var vm = $scope.vm = {};
        $rootScope.pageName = 'index';
    }]);

angular.module('controller')
    .controller('module2Ctrl', ['$scope', '$rootScope', '$http',  function($scope, $rootScope, $http) {
        var vm = $scope.vm = {};
        $rootScope.pageName = 'index';
    }]);

angular.module("templates").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<!DOCTYPE html>\n<html lang=\"zh-cmn-Hans\">\n\n    <head>\n        <meta charset=\"utf-8\">\n        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\">\n        <title>angularDemo</title>\n        <meta content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no\" name=\"viewport\">\n        <link rel=\"stylesheet\" type=\"text/css\" href=\"css/all.min.css\" />\n    </head>\n\n    <body ng-app=\"app\">\n        <header>这里是头部</header>\n        <h1>现在是{{pageName}}</h1>\n        <ul class=\"nav nav-pills\">\n            <li role=\"presentation\" ui-sref-active=\"active\" ui-sref=\"module1\"><a href=\"#\">第一页</a></li>\n            <li role=\"presentation\" ui-sref-active=\"active\" ui-sref=\"module2\"><a href=\"#\">第二页</a></li>\n            <li role=\"presentation\" ui-sref-active=\"active\" ui-sref=\"module3\"><a href=\"#\">第三页</a></li>\n        </ul>\n        <section data-ui-view=\"\">\n            <!--你的页面将加载在这-->\n        </section>\n    </body>\n    <script src=\"js/lib.min.js\" type=\"text/javascript\" charset=\"utf-8\"></script>\n    <script src=\"js/business.js\" type=\"text/javascript\" charset=\"utf-8\"></script>\n\n</html>\n");
$templateCache.put("components/module_1/index.html","<div>我是模块1</div>\n");
$templateCache.put("components/module_2/index.html","<div>我是模块2</div>\n");
$templateCache.put("components/module_3/index.html","<div>我是模块3</div>\n");}]);
angular.module('controller')
    .controller('module3Ctrl', ['$scope', '$rootScope', '$http',  function($scope, $rootScope, $http) {
        var vm = $scope.vm = {};
        $rootScope.pageName = 'index';
    }]);
