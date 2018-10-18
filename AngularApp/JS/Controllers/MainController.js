MiaBellaApp.controller('MainController', function($scope, $location, $mdDialog, Constants, Webservice)
{   
    $scope.loading = false;
    $scope.constants = Constants;
    $scope.banners = [];
    $scope.aboutUs = {'title': 'About Us', 
                      'subTitle': 'Membership is for everyone!',
                      'content': 'Become a member and get 10% off your first order',
                      'imgSrc': 'Content/img/banners/about_us.png',
                      'imgAlt': 'about_us'};
    $scope.onlineStore = {'title': 'Online Store'};
    $scope.products = [];
    $scope.courses = {'title': 'Courses',
                      'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, doloribus. Asperiores ad vitae quasi ut saepe? Provident ex ullam voluptatibus tempora nihil eum illo facere explicabo dolores officia, fuga doloremque!. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta veniam eveniet tenetur voluptates dolorem eaque sit minima aperiam, odio optio, ex sint quidem tempora sapiente atque magnam exercitationem in? Distinctio?',
                      'backgroundUrl': 'Content/img/banners/courses.png'};
    $scope.contacts = {'title': 'Contacts',
                       'imgSrc': 'Content/img/banners/contacts.png',
                       'imgAlt': 'contacts'};
    $scope.categories =
    [
        {
            "name": "Necklaces",
            "product_type_id":1,
            "active": false
        },
        {
            "name": "Bracelets",
            "product_type_id":2,
            "active": true
        },
        {
            "name": "Rings",
            "product_type_id":3,
            "active": false
        }
    ];
    $scope.productCategory =
    {
        "product_type_id":2
    };
    var i = 0;

    $scope.setProductCategory = function(category)
    {
        cleanProductButtons();
        $scope.productCategory.product_type_id = category.product_type_id;
        category.active = true;
    };

    function cleanProductButtons()
    {
        for(i = 0; i < $scope.categories.length; i++)
        {
            $scope.categories[i].active = false;
        }
    }

    $scope.GetBanners = function ()
    {
        $scope.loading = true;
        Webservice.Get("content/ContentController.php/GetBanners").then(function(response)
        {
            if(response.success)
            {
                $scope.banners = response.data;
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

    $scope.GetProducts = function()
    {
        $scope.loading = true;
        Webservice.Get("products/ProductsController.php/GetProducts/").then(function(response)
        {
            if(response.success)
            {
                $scope.products = response.data;
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
    
    $scope.ShowProductDetails = function(productId)
    {
        $location.url("/Product/" + productId);
    };
    
    $scope.OpenContactModal = function(ev) 
    {
        $("#app-body").toggleClass("overflowVisible");
        $mdDialog.show({
            controller: ContactController,
            templateUrl: 'AngularApp/Templates/Modals/ContactModal.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:false,
            fullscreen: true
        });
    };

    function ContactController($scope, $mdDialog, Webservice)
    {
        $scope.loading = false;

        $scope.cancel = function() 
        {
            $("#app-body").toggleClass("overflowVisible");
            $mdDialog.cancel();
        };
    
        $scope.SubmitContact = function()
        {
            $mdDialog.hide();
        }

    }
    
});