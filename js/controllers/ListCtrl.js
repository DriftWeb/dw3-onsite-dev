(function () {
    angular.module('onsiteApp').controller('ListCtrl', function ($scope, $rootScope, $timeout) {
        $rootScope.list = [];
        $timeout(function() {
            $rootScope.list = [
                {
                    friendlyId: 1,
                    title: "Title 1"
                },
                {
                    friendlyId: 2,
                    title: "Title 2"
                },
                {
                    friendlyId: 3,
                    title: "Title 3"
                },
                {
                    friendlyId: 4,
                    title: "Title 4"
                },
                {
                    friendlyId: 5,
                    title: "Title 5"
                }
            ];
        }, 3000);
           
        $scope.leftSlide = function(item) {
            item.open = true;
        };
        $scope.rightSlide = function(item) {
            item.open = false;
        };
    });
})();