angular.module('controller')
    .controller('module3Ctrl', ['$scope', '$rootScope', '$http',  function($scope, $rootScope, $http) {
        var vm = $scope.vm = {};
        $rootScope.pageName = 'index';
    }]);
