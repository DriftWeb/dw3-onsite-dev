(function () {
    angular.module('onsiteApp').controller('HomeCtrl', function ($scope, $rootScope) {

        $scope.leftSlide = function (item) {
            item.open = true;
        };
        $scope.rightSlide = function (item) {
            item.open = false;
        };
    });
})();