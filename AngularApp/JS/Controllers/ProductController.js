MiaBellaApp.controller('ProductController', function($scope, $routeParams, Constants, $mdDialog, Webservice)
{   
    $scope.loading = false;
    $scope.productId = $routeParams.ID;
    $scope.constants = Constants;
    $scope.productName = "";
    $scope.productDescription = "";
    $scope.productPrice = 0;
    $scope.imgSrc = "";
    $scope.imgAlt = "";
    $scope.productsDetails = {};

    $scope.GetProductDetail = function ()
    {
        $scope.loading = true;
        Webservice.Get("products/ProductsController.php/GetProducts/" + $scope.productId).then(function(response)
        {
            if(response.success)
            {
                $scope.productsDetails = response.data;
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

    $scope.AddToCart = function()
    {
        
    };

    $scope.RemoveProduct = function()
    {
        if($scope.product.number != 1)
            $scope.product.number -= 1;
    };

    $scope.AddProduct = function()
    {
        $scope.product.number += 1;
    };

});