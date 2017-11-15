OnNetApp.config(['$routeProvider' , function($routeProvider)
{
    
    $routeProvider.when('/' , {      
        templateUrl: '~/AngularApp/Templates/inicio.html',
        controller: 'ControllerInicio'
    })
    .when('/Nosotros' , {      
        templateUrl: '~/AngularApp/Templates/nosotros.html',
        controller: 'ControllerNosotros'
    })
    .otherwise({        
        redirectTo: '/'        
    })
    
}]);