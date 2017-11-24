MiaBellaApp.controller('ProductController', function($scope, $routeParams)
{   
    $scope.loading = false;
    $scope.productId = $routeParams.ID; 
});