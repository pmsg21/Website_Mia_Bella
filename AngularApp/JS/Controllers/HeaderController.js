MiaBellaApp.controller('HeaderController', function($scope , $location, Constants, anchorSmoothScroll, $http)
{   
    $scope.loading = false;
    $scope.constants = Constants;
    $scope.currentNavItem = "Home";
    $scope.navItems = [];
    
    $scope.scrollTo = function (elementID)
    {
        if($location.url() != "/")
        {
            $location.url("/");
            setTimeout(function()
            { 
                anchorSmoothScroll.scrollTo(elementID);
            }, 500);
        }
        else
            anchorSmoothScroll.scrollTo(elementID);
    };

    $http.get($scope.constants.apiURL + "GetSections").then(function(response)
    {
        if(response.status == 200)
        {
            $scope.navItems = response.data.data;
        }
    })

});