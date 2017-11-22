MiaBellaApp.controller('HeaderController', function($scope , $location, Constants, anchorSmoothScroll)
{   
    $scope.loading = false;
    $scope.config = Constants;
    $scope.currentNavItem = "Home";
    $scope.navItems = [{section:'Home', redirectTo:'home'},
                       {section:'About Us', redirectTo:'aboutUs'},
                       {section:'Online Store', redirectTo:'onlineStore'},
                       {section:'Courses', redirectTo:'courses'},
                       {section:'Contacts', redirectTo:'contacts'}]
    
    $scope.scrollTo = function (elementID)
    {
        anchorSmoothScroll.scrollTo(elementID);
    };

});