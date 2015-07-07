angular.module('onsiteApp').controller('listCtrl', function ($scope) {
    $scope.isSwipping = false;
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
        $scope.isSwipping = true;
        item.open = true;
    };
    $scope.rightSlide = function (item) {
        $scope.isSwipping = true;
        item.open = false;
    };
    
    $scope.listLineClick = function(item) {
        if($scope.isSwipping){
            $scope.isSwipping = false;
            return;
        }
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