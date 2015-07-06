(function () {
    angular.module('onsiteApp').controller('ListCtrl', function ($scope, $rootScope) {
        $scope.leftSlide = function (item) {
            item.open = true;
        };
        $scope.rightSlide = function (item) {
            item.open = false;
        };
    });
})();