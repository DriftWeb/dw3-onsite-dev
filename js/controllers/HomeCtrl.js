(function () {
    angular.module('onsiteApp').controller('HomeCtrl', function ($scope) {
        alert("Swipe right");
        $scope.swipeRight = function () {
            $scope.direction = 'right';
            alert("Swipe right");
        };

    });
})();