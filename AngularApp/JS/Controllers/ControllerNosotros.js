OnNetApp.controller('ControllerNosotros', function($scope, Constants, $http)
{   
    $scope.config = Constants;
    $scope.equipo = [];
    
    $http.get($scope.config.apiURL + "equipo.php").then(function(Response)
    {
        for(var i = 0; i < Response.data.length; i++)
        {
            if(Response.data[i].ID == "1")
            {
                Response.data[i].ApplyOffset = true;
            }
            else
            {
                Response.data[i].ApplyOffset = false;
            }
        }
        $scope.equipo = Response.data;
    });    
    
});