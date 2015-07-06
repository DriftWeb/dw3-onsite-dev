// Declare app level module which depends on filters, and services
var onsiteApp = angular.module('onsiteApp', ['ngRoute', 'ngAnimate', 'ngTouch'])
.config(function ($compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension):/);
})
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', { templateUrl: 'partials/homeView.html' });
    $routeProvider.when('/list', { templateUrl: 'partials/listView.html' });
    $routeProvider.when('/list2', { templateUrl: 'partials/list2View.html' });
    $routeProvider.when('/map', { templateUrl: 'partials/mapView.html' });
    $routeProvider.when('/details', { templateUrl: 'partials/detailsView.html' });

    $routeProvider.otherwise({ redirectTo: '/' });
}]);
