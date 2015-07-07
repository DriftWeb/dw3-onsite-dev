(function () {
    angular.module('onsiteApp').controller('MapCtrl', function ($scope, $rootScope) {
        var map;
        var featureLayer = new ol.layer.Vector({});
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
            }), featureLayer];


            map = new ol.Map({
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

            map.on('singleclick', function (evt) {
                console.log(evt.coordinate[0]);
                console.log(evt.coordinate[1]);
            });
        }
        var featuresPaaOl3MapTak = function () {
            var iconFeatures = [];
            var iconFeature = new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.transform([561908.1699999999, 6301132.914999998], 'EPSG:25832', 'EPSG:25832', 'EPSG:25832')),
                name: 'OG det var nr. et'
                
            });

            var iconFeature2 = new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.transform([677064.42, 6154179.789999998], 'EPSG:25832', 'EPSG:25832', 'EPSG:25832')),
                name: 'Test 2'
                
            });


            iconFeatures.push(iconFeature);
            iconFeatures.push(iconFeature2);
            

            var vectorSource = new ol.source.Vector({
                features: iconFeatures 
            });

            //BE AWARE: Phonegap wont show images in subfolders with normal /../../img/pic.jpg relative path. Instead, all upwards folder navigation is replaced with ./
            var iconStyle = new ol.style.Style({
                image: new ol.style.Icon(/** @type {olx.style.IconOptions} */({
                    anchor: [0.5, 46],
                    anchorXUnits: 'fraction',
                    anchorYUnits: 'pixels',
                    opacity: 0.95,
                    src: './res/icon/mapIcon.png'
                }))
            });


            //begge virker (hvis nu man ikke har features/source tilgængelig når kort initialiseres
            featureLayer = new ol.layer.Vector({
                source: vectorSource,
                style: iconStyle
            });
            //featureLayer.setSource(vectorSource);
            //featureLayer.setStyle(iconStyle);

        }

        featuresPaaOl3MapTak();
        initOl3Map();
    });



})();