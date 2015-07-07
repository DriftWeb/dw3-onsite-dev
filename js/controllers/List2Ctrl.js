﻿angular.module('onsiteApp').controller('list2Ctrl', function ($scope, $window) {
    $scope.selectedIndex = -1;
    $scope.lightDetails = false;
    $scope.fullDetails = false;
    $scope.selectedItem = null;
    $scope.leftDetails = (window.orientation === 90 || window.orientation === -90) && window.screen.width >= 1000;

    angular.element($window).bind('orientationchange', function () {
        $scope.leftDetails = (window.orientation === 90 || window.orientation === -90) && window.screen.width >= 1000;
        if ($scope.leftDetails) {
            $scope.fullDetails = $scope.lightDetails || $scope.fullDetails;
            $scope.lightDetails = false;
        } 
        $scope.$apply();
    });

    $scope.list = [];
    for (var i = 0; i < 50; i++) {
        $scope.list.push({
            friendlyId: i,
            title: "Græs: Græsklipning ",
            locationNear: "Sundholmsvej " + i + ", 2300 København S",
            assignedBy: "Martin Anthoniussen "
        });
    }

    $scope.click = function ($index) {
        $scope.selectedIndex = $index;
        $scope.selectedItem = $scope.list[$index];
        if ($scope.leftDetails)
            $scope.fullDetails = true;
        else
            $scope.lightDetails = true;
    };

    $scope.showMore = function () {
        $scope.lightDetails = false;
        $scope.fullDetails = true;
    }

    $scope.showLess = function () {
        if ($scope.leftDetails) {
            $scope.fullDetails = false;
            $scope.lightDetails = false;
        } else {
            $scope.fullDetails = false;
            $scope.lightDetails = true;
        }
    }

    var map = new ol.Map({
        layers: [
          new ol.layer.Tile({
              source: new ol.source.OSM()
          })
        ],
        controls: ol.control.defaults({
            attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
                collapsible: false
            })
        }),
        target: 'map-more',
        view: new ol.View({
            center: [0, 0],
            zoom: 2
        })
    });
});