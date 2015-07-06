(function () {
    angular.module('onsiteApp').controller('HomeCtrl', function ($scope) {

        $scope.swipeRight = function () {
            $scope.direction = 'right';
            alert("Swipe right");
        };

    });
})();