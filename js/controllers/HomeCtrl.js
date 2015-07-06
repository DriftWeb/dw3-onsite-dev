(function () {
    angular.module('onsiteApp').controller('HomeCtrl', function ($scope, $rootScope) {
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
}];
        $scope.leftSlide = function (item) {
            item.open = true;
        };
        $scope.rightSlide = function (item) {
            item.open = false;
        };
    });
    });
})();