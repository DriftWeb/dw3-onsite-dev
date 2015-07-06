(function () {
    angular.module('onsiteApp').controller('DetailsCtrl', function ($scope, $rootScope) {
        $rootScope.testme = [];
        $rootScope.testme = [
            {
                friendlyId: 1,
                title: "Thingstoshow"
            },
            {
                friendlyId: 2,
                title: "Sometest123"
            }
        ];
    });
})();