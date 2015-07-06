'use strict';


// Declare app level module which depends on filters, and services
var onsiteApp = angular.module('onsiteApp', ['ngRoute', 'ngAnimate', 'ngTouch'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', { templateUrl: 'partials/homeView.html' });
    $routeProvider.when('/list', { templateUrl: 'partials/listView.html' });
    $routeProvider.when('/map', { templateUrl: 'partials/mapView.html' });
    $routeProvider.otherwise({ redirectTo: '/' });
}]);

onsiteApp.run(function ($rootScope, $http) {
    $rootScope.list2 = [
{
    friendlyId: 1,
    title: "Title 1"
},
{
    friendlyId: 2,
    title: "Title 2"
},
{
    friendlyId: 3,
    title: "Title 3"
},
{
    friendlyId: 4,
    title: "Title 4"
},
{
    friendlyId: 5,
    title: "Title 5"
}];
});