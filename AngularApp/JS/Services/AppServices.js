var Webservice = function($http, Constants, $rootScope)
{

    function Get(url)
    {
        if($rootScope.online)
        {
            return $http.get(Constants.apiURL + url).then(DefaultSuccessFunction, DefaultErrorFunction);
        }
        else
        {
            var data = null;
            DefaultErrorFunction(data);
        }
    }

    function Post(url, parameters)
    {
        if($rootScope.online)
        {
            return $http.post(url, parameters).then(DefaultSuccessFunction, DefaultErrorFunction);
        }
        else
        {
            var data = null;
            DefaultErrorFunction(data);
        }
    }

    function DefaultSuccessFunction(data)
    {
        if(data == null || data.status != 200)
        {
            DefaultErrorFunction(data);
        }
        else if(data.status == 200)
        {
            return data.data;
        }
    }

    function DefaultErrorFunction(data)
    {
        var error =
        {
            "message": "",
            "success": false
        };
        if(data == null)
        {
            error.message = "Error, compruebe su conexión";
        }
        else if(data.status == 404)
        {
            error.message = "No se encontró el recurso.";
        }
        return error;
    }

    return {
        Get: Get,
        Post: Post
    };
};

MiaBellaApp.factory("Webservice", Webservice);