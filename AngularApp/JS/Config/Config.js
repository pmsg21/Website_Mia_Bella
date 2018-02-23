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
    .when('/Register' , {
        templateUrl: 'AngularApp/Templates/RegisterPage.html',
        controller: 'RegisterController'
    })
    .otherwise({        
        redirectTo: '/'        
    })
    
}]);