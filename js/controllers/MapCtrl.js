﻿(function () {
    angular.module('onsiteApp').controller('MapCtrl', function () {

        initOl3Map();

       
    });

    var initOl3Map = function () {
        var map = new ol.Map({
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
            ],
            controls: ol.control.defaults({
                attributionOptions: ({
                    collapsible: false
                })
            }),
            target: 'map',
            view: new ol.View({
                center: [0, 0],
                zoom: 2
            })
        });

    }

})();