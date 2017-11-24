MiaBellaApp.config(['$routeProvider' , function($routeProvider)
{
    
    $routeProvider.when('/' , {      
        templateUrl: 'AngularApp/Templates/MainPage.html',
        controller: 'MainController'
    })
    .when('/Product/:ID' , {      
        templateUrl: 'AngularApp/Templates/ProductPage.html',
        controller: 'ProductController'
    })
    .otherwise({        
        redirectTo: '/'        
    })
    
}]);