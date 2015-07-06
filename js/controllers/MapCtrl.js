(function () {
    angular.module('onsiteApp').controller('MapCtrl', function () {
        initOl3Map();
    });

    var initOl3Map = function () {
        proj4.defs("EPSG:25832", "+proj=utm +zone=32 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");
        var projection = ol.proj.get('EPSG:25832');
        projection.setExtent([120000, 5661139.2, 1000000, 6500000.0]);
        var extent = [120000, 5661139.2, 1000000, 6500000.0];

        var layers = [
        new ol.layer.Tile({
            extent: extent,
            source: new ol.source.TileWMS({
                url: 'http://kortforsyningen.kms.dk/',
                crossOrigin: 'anonymous',
                attributions: [
                    new ol.Attribution({
                        html: '&copy; ' +
                            '<a href="http://kortforsyningen.dk" target="_blank">' +
                            'Kortforsyningen</a>'
                    })
                ],
                params: {
                    'LAYERS': 'dtk_skaermkort',
                    'FORMAT': 'image/jpeg',
                    'servicename': 'topo_skaermkort',
                    'ticket': "b201aa458bf671354e9ac56208910b53",
                    'TRANSPARENT': 'FALSE',

                }


            })
        })];



        var map = new ol.Map({
            interactions: ol.interaction.defaults().extend([
                // new ol.interaction.DragRotateAndZoom()
            ]),
            controls: ol.control.defaults().extend([
                new ol.control.ScaleLine()
            ]),
            layers: layers,
            // renderer: exampleNS.getRendererFromQueryString(),
            target: 'map',
            view: new ol.View({
                projection: projection,
                center: ol.proj.transform([718314.42, 6174804.79], 'EPSG:25832', 'EPSG:25832'),
                extent: extent,
                zoom: 2
            })
        });

    }

})();