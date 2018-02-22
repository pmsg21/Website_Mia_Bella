MiaBellaApp.controller('MainController', function($scope, $location, $mdDialog, Constants, Webservice)
{   
    $scope.loading = false;
    $scope.constants = Constants;
    $scope.banners = [];
    $scope.aboutUs = {'title': 'About Us', 
                      'subTitle': 'Membership is for everyone!',
                      'content': 'lorem impsum dolor sit amet, consectetuer asipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eram volutpat',
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
        $mdDialog.show({
            controller: ContactController,
            templateUrl: 'AngularApp/Templates/Modals/ContactModal.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: $scope.customFullscreen
        });
    };

    function ContactController($scope, $mdDialog) 
    {
        $scope.loading = false;

        $scope.cancel = function() 
        {
            $mdDialog.cancel();
        };
    
        $scope.SubmitContact = function()
        {
            $mdDialog.hide();
        }

    }
    
});