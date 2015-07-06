angular.module('onsiteApp').controller('listCtrl', function ($scope) {
    $scope.list = [
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

    $scope.leftSlide = function (item) {
        item.open = true;
    };
    $scope.rightSlide = function (item) {
        item.open = false;
    };
    
    $scope.listLineClick = function(item) {
        var dirPath = dirname(location.href);
        fullPath = dirPath + "#/details";
        window.location=fullPath;
    };
    
    function dirname(path)
    {
       return path.replace(/\\/g,'/').replace(/\/[^\/]*$/, '');
    }
    
    $scope.statusChange = function(item, status) {
        alert(item.title +  " - status " + status);
    };
});