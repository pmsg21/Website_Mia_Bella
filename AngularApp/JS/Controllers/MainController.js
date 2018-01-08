MiaBellaApp.controller('MainController', function($scope, $location, $mdDialog, $http, Constants)
{   
    $scope.loading = false;
    $scope.constants = Constants;
    $scope.banners = [];
    $scope.aboutUs = {'title': 'About Us', 
                      'subTitle': 'Membership is for everyone!',
                      'content': 'lorem impsum dolor sit amet, consectetuer asipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eram volutpat',
                      'imgSrc': 'Content/img/banners/about_us.png',
                      'imgAlt': 'about_us'};
    $scope.onlineStore = {'title': 'Online Store',
                          'products':[{'productId': 1,
                                       'productName': 'Pulsera 1',
                                       'imgSrc':'Content/img/products/pulsera_1.jpg',
                                       'imgAlt': 'pulsera_1'},
                                       {'productId': 2,
                                       'productName': 'Pulsera 2',
                                       'imgSrc':'Content/img/products/pulsera_2.jpg',
                                       'imgAlt': 'pulsera_2'},
                                       {'productId': 3,
                                       'productName': 'Pulsera 3',
                                       'imgSrc':'Content/img/products/pulsera_3.jpg',
                                       'imgAlt': 'pulsera_3'},
                                       {'productId': 4,
                                       'productName': 'Pulsera 4',
                                       'imgSrc':'Content/img/products/pulsera_4.jpg',
                                       'imgAlt': 'pulsera_4'},
                                       {'productId': 5,
                                       'productName': 'Pulsera 5',
                                       'imgSrc':'Content/img/products/pulsera_5.jpg',
                                       'imgAlt': 'pulsera_5'},
                                       {'productId': 6,
                                       'productName': 'Pulsera 6',
                                       'imgSrc':'Content/img/products/pulsera_6.jpg',
                                       'imgAlt': 'pulsera_6'},
                                       {'productId': 7,
                                       'productName': 'Pulsera 7',
                                       'imgSrc':'Content/img/products/pulsera_7.jpg',
                                       'imgAlt': 'pulsera_7'},
                                       {'productId': 8,
                                       'productName': 'Pulsera 8',
                                       'imgSrc':'Content/img/products/pulsera_1.jpg',
                                       'imgAlt': 'pulsera_1'},
                                       {'productId': 9,
                                       'productName': 'Pulsera 9',
                                       'imgSrc':'Content/img/products/pulsera_2.jpg',
                                       'imgAlt': 'pulsera_2'},
                                       {'productId': 10,
                                       'productName': 'Pulsera 10',
                                       'imgSrc':'Content/img/products/pulsera_3.jpg',
                                       'imgAlt': 'pulsera_3'},
                                       {'productId': 11,
                                       'productName': 'Pulsera 11',
                                       'imgSrc':'Content/img/products/pulsera_4.jpg',
                                       'imgAlt': 'pulsera_4'},
                                       {'productId': 12,
                                       'productName': 'Pulsera 12',
                                       'imgSrc':'Content/img/products/pulsera_5.jpg',
                                       'imgAlt': 'pulsera_5'},
                                       {'productId': 13,
                                       'productName': 'Pulsera 13',
                                       'imgSrc':'Content/img/products/pulsera_6.jpg',
                                       'imgAlt': 'pulsera_6'},
                                       {'productId': 14,
                                       'productName': 'Pulsera 14',
                                       'imgSrc':'Content/img/products/pulsera_7.jpg',
                                       'imgAlt': 'pulsera_7'},
                                       {'productId': 15,
                                       'productName': 'Pulsera 15',
                                       'imgSrc':'Content/img/products/pulsera_4.jpg',
                                       'imgAlt': 'pulsera_4'},
                                       {'productId': 16,
                                       'productName': 'Pulsera 16',
                                       'imgSrc':'Content/img/products/pulsera_5.jpg',
                                       'imgAlt': 'pulsera_5'},
                                       {'productId': 17,
                                       'productName': 'Pulsera 17',
                                       'imgSrc':'Content/img/products/pulsera_6.jpg',
                                       'imgAlt': 'pulsera_6'},
                                       {'productId': 18,
                                       'productName': 'Pulsera 18',
                                       'imgSrc':'Content/img/products/pulsera_7.jpg',
                                       'imgAlt': 'pulsera_7'}]};
    $scope.courses = {'title': 'Courses',
                      'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, doloribus. Asperiores ad vitae quasi ut saepe? Provident ex ullam voluptatibus tempora nihil eum illo facere explicabo dolores officia, fuga doloremque!. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta veniam eveniet tenetur voluptates dolorem eaque sit minima aperiam, odio optio, ex sint quidem tempora sapiente atque magnam exercitationem in? Distinctio?',
                      'backgroundUrl': 'Content/img/banners/courses.png'};
    $scope.contacts = {'title': 'Contacts',
                       'imgSrc': 'Content/img/banners/contacts.png',
                       'imgAlt': 'contacts'}

    $http.get($scope.constants.apiURL + "content/").then(function(response)
    {
        if(response.status == 200)
        {
            $scope.banners = response.data;
        }
    })
    
    $scope.ShowProductDetails = function(productId)
    {
        $location.url("/Product/" + productId);
    }
    
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