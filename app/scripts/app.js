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
