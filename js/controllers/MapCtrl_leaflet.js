(function () {
    angular.module('onsiteApp').controller('MapCtrl_Leaflet', function ($scope, $rootScope, olData, olHelpers) {
        
        //fortsæt med at vis kort fra kortforsyningen
      
        
        angular.extend($scope, {
            defaults: {
                tileLayerOptions: {
                    attribution: "Driftweb 3 - Grontmij"
                },
                tileLayer: "http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png",
                maxZoom: 14,
                path: {
                    weight: 10,
                    color: '#800000',
                    opacity: 1
                }
            }
        });
        angular.extend($scope, {
            attribution: "Driftweb 3 - Grontmij",
            center: {
                lat: 51.505,
                lng: -0.09,
                zoom: 8
            }
        });
    });



})();