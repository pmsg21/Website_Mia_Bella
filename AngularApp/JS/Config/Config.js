MiaBellaApp.config(['$routeProvider' , function($routeProvider)
{
    
    $routeProvider.when('/' , {      
        templateUrl: 'AngularApp/Templates/MainPage.html',
        controller: 'MainController'
    })
    .otherwise({        
        redirectTo: '/'        
    })
    
}]);