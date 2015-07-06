'use strict';

function jsonp_callback(data) {
    // returning from async callbacks is (generally) meaningless
    console.log(data.found);
}

// Declare app level module which depends on filters, and services
var app = angular.module('onsiteApp', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', { templateUrl: 'partials/listView.html', controller: 'ListCtrl' });
    $routeProvider.when('/list', { templateUrl: 'partials/listView.html', controller: 'ListCtrl' });
    $routeProvider.when('/map', { templateUrl: 'partials/mapView.html', controller: 'MapCtrl' });
    $routeProvider.otherwise({ redirectTo: '/' });
}]);

app.run(function ($rootScope) {
    $rootScope.list = [
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