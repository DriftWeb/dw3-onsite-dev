'use strict';


// Declare app level module which depends on filters, and services
var onsiteApp = angular.module('onsiteApp', ['ngRoute', 'ngAnimate', 'ngTouch'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', { templateUrl: 'partials/homeView.html' });
    $routeProvider.when('/list', { templateUrl: 'partials/listView.html' });
    $routeProvider.when('/map', { templateUrl: 'partials/mapView.html' });
    $routeProvider.otherwise({ redirectTo: '/' });
}]);