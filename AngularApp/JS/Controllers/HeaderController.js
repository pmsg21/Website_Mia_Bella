MiaBellaApp.controller('HeaderController', function($scope , $location, Constants, anchorSmoothScroll, Webservice, $mdDialog)
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

    $scope.GetNavSections = function ()
    {
        Webservice.Get("GetSections").then(function(response)
        {
            if(response.success)
            {
                $scope.navItems = response.data;
            }
            else
            {
                var errorDialog = $mdDialog.alert()
                    .title('Error')
                    .textContent(response.message)
                    .ariaLabel('Lucky day')
                    .ok('OK');
                $mdDialog.show(errorDialog);
            }
            $scope.loading = false;
        });
    };

    $scope.OpenLoginModal = function (ev)
    {
        $("#app-body").toggleClass("overflowVisible");
        $mdDialog.show({
            controller: LoginController,
            templateUrl: 'AngularApp/Templates/Modals/LoginModal.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:false,
            fullscreen: true
        });
    };

    function LoginController($scope, $mdDialog, $location, Webservice)
    {
        $scope.loading = false;
        $scope.showError = false;
        $scope.errorMessage = "";

        $scope.Register = function ()
        {
            $("#app-body").toggleClass("overflowVisible");
            $mdDialog.cancel();
            $location.url("/Register");
        };

        $scope.cancel = function()
        {
            $("#app-body").toggleClass("overflowVisible");
            $mdDialog.cancel();
        };

        $scope.SubmitContact = function()
        {
            $scope.loading = true;
            Webservice.Post("access/AccessController.php/Login", $scope.user).then(function(response)
            {
                if(response.success)
                {

                }
                else
                {
                    $scope.errorMessage = response.message;
                    $scope.showError = true;
                }
                $scope.loading = false;
            });
        };

        $scope.hideOverlay = function ()
        {
            $scope.showError = false;
        };

    }

});