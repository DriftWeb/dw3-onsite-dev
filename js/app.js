'use strict';

function jsonp_callback(data) {
    // returning from async callbacks is (generally) meaningless
    console.log(data.found);
}

// Declare app level module which depends on filters, and services
var app = angular.module('onsiteApp', ['ngRoute'])
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', { templateUrl: 'partials/homeView.html', controller: 'HomeCtrl' });
    $routeProvider.when('/list', { templateUrl: 'partials/listView.html', controller: 'ListCtrl' });
    $routeProvider.otherwise({ redirectTo: '/' });
}]);
