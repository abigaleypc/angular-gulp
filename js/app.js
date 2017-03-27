angular = require('angular');
require('angular-route');
require('../dist/templateCachePartials');

angular.module('mainModule', ['ngRoute'])
	.config(function ($routeProvider) {
		'use strict';

		var routeConfig = {
			controller: 'mainCtrl',
			templateUrl: '/partials/index.html',
			resolve: {
			
			}
		};

		$routeProvider
			.when('/', routeConfig);
	});

require('mainCtrl');
