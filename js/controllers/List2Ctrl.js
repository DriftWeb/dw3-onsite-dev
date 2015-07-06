angular.module('onsiteApp').controller('list2Ctrl', function ($scope) {
    $scope.selectedIndex = -1;
    $scope.showLight = false;
    $scope.showMore = false;
    $scope.selectedItem = null;
    $scope.showMore = false;
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
        $scope.showLight = true;
    };

    $scope.toggleShowMore = function () {
        $scope.showLight = !$scope.showLight;
        $scope.showMore = !$scope.showMore;
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
        target: 'map',
        view: new ol.View({
            center: [0, 0],
            zoom: 2
        })
    });
});