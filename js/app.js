// Declare app level module which depends on filters, and services
var onsiteApp = angular.module('onsiteApp', ['ngRoute', 'ngAnimate', 'ngTouch'])
.config(function ($compileProvider) {
    $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', { templateUrl: 'partials/homeView.html' });
    $routeProvider.when('/list', { templateUrl: 'partials/listView.html' });
    $routeProvider.when('/map', { templateUrl: 'partials/mapView.html' });
    $routeProvider.when('/details', { templateUrl: 'partials/detailsView.html' });

    $routeProvider.otherwise({ redirectTo: '/' });
}]);
