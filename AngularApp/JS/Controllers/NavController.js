OnNetApp.controller('NavController', function($scope , $location)
{   
    $scope.currentNavItem = "Inicio";
    $scope.navItems = [{Seccion:'Inicio',URL:''},{Seccion:'Nosotros',URL:'Nosotros'},{Seccion:'Contacto',URL:'Contacto'}]
    
    $scope.showContent = function(url) 
    {
        $location.url(url);
    }

});