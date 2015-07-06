(function () {
    angular.module('onsiteApp').controller('ListCtrl', function () {

        $scope.swipeRight = function () {
            $scope.direction = 'right';
            alert("Swipe right");
        };

    });
})();