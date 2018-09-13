MiaBellaApp.controller('RegisterController', function($scope , $location, Constants, Webservice, $mdDialog, anchorSmoothScroll)
{
    $scope.loading = false;
    $scope.showStep1 = true;
    $scope.showStep2 = false;
    $scope.registerCompleted = false;
    $scope.credentials = { "user_type_id": 1 };
    $scope.details = {};

    $scope.SubmitUserCredentials = function ()
    {
        $scope.loading = true;
        Webservice.Post("access/AccessController.php/RegisterUser", $scope.credentials).then(function(response)
        {
            if(response.success)
            {
                $scope.details.user_id = response.data.user_id;
                $scope.showStep1 = false;
                $scope.showStep2 = true;
            }
            else
            {
                $("#app-body").toggleClass("overflowVisible");
                var errorDialog = $mdDialog.alert()
                    .title('Error')
                    .textContent(response.message)
                    .ariaLabel('Lucky day')
                    .ok('OK');
                $mdDialog.show(errorDialog).then(function()
                {
                    $("#app-body").toggleClass("overflowVisible");
                });
            }
            $scope.loading = false;
        });
    };

    $scope.SubmitUserDetails = function ()
    {
        $scope.loading = true;
        var day = $scope.details.birthdayDate.getDate();
        var month = $scope.details.birthdayDate.getMonth();
        var year = $scope.details.birthdayDate.getFullYear();
        $scope.details.birthday = year + "-" + month + "-" + day;
        debugger;
        Webservice.Post("access/AccessController.php/RegisterUserDetails", $scope.details).then(function(response)
        {
            if(response.success)
            {
                $scope.showStep2 = false;
                $scope.registerCompleted = true;
            }
            else
            {
                $("#app-body").toggleClass("overflowVisible");
                var errorDialog = $mdDialog.alert()
                    .title('Error')
                    .textContent(response.message)
                    .ariaLabel('Lucky day')
                    .ok('OK');
                $mdDialog.show(errorDialog).then(function()
                {
                    $("#app-body").toggleClass("overflowVisible");
                });
            }
            $scope.loading = false;
        });
    };

    $scope.GoHome = function ()
    {
        $location.url("/");
        setTimeout(function()
        {
            anchorSmoothScroll.scrollTo("home");
        }, 500);
    }

});