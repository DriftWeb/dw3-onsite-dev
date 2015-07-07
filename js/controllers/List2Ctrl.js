angular.module('onsiteApp').controller('list2Ctrl', function ($scope, $window) {
    $scope.selectedIndex = -1;
    $scope.lightDetails = false;
    $scope.fullDetails = false;
    $scope.selectedItem = null;
    $scope.leftDetails = (window.orientation === 90 || window.orientation === -90) && window.screen.width >= 1000;
    $scope.orientation = window.orientation;
    $scope.width = window.screen.width;

    $scope.something = window.WURFL.form_factor;

    angular.element($window).bind('orientationchange', function () {
        $scope.leftDetails = (window.orientation === 90 || window.orientation === -90) && window.screen.width >= 1000;
        $scope.orientation = window.orientation;
        $scope.width = window.screen.width;

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
});