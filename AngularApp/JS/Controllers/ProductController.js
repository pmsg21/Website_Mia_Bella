MiaBellaApp.controller('ProductController', function($scope, $routeParams)
{   
    $scope.loading = false;
    $scope.productId = $routeParams.ID; 
    $scope.productName = "";
    $scope.productDescription = "";
    $scope.productPrice = 0;
    $scope.imgSrc = "";
    $scope.imgAlt = "";
    $scope.productsDetails = [{'productId': 1,
                            'productName': 'Pulsera 1',
                            'productDescription': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptate repellat necessitatibus ratione corrupti aperiam consequuntur odio.',
                            'productPrice': 69.99,
                            'imgSrc':'Content/img/products/pulsera_1.jpg',
                            'imgAlt': 'pulsera_1'},
                            {'productId': 2,
                            'productName': 'Pulsera 2',
                            'productDescription': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptate repellat necessitatibus ratione corrupti aperiam consequuntur odio.',
                            'productPrice': 69.99,
                            'imgSrc':'Content/img/products/pulsera_2.jpg',
                            'imgAlt': 'pulsera_2'},
                            {'productId': 3,
                            'productName': 'Pulsera 3',
                            'productDescription': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptate repellat necessitatibus ratione corrupti aperiam consequuntur odio.',
                            'productPrice': 69.99,
                            'imgSrc':'Content/img/products/pulsera_3.jpg',
                            'imgAlt': 'pulsera_3'},
                            {'productId': 4,
                            'productName': 'Pulsera 4',
                            'productDescription': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptate repellat necessitatibus ratione corrupti aperiam consequuntur odio.',
                            'productPrice': 69.99,
                            'imgSrc':'Content/img/products/pulsera_4.jpg',
                            'imgAlt': 'pulsera_4'},
                            {'productId': 5,
                            'productName': 'Pulsera 5',
                            'productDescription': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptate repellat necessitatibus ratione corrupti aperiam consequuntur odio.',
                            'productPrice': 69.99,
                            'imgSrc':'Content/img/products/pulsera_5.jpg',
                            'imgAlt': 'pulsera_5'},
                            {'productId': 6,
                            'productName': 'Pulsera 6',
                            'productDescription': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptate repellat necessitatibus ratione corrupti aperiam consequuntur odio.',
                            'productPrice': 69.99,
                            'imgSrc':'Content/img/products/pulsera_6.jpg',
                            'imgAlt': 'pulsera_6'},
                            {'productId': 7,
                            'productName': 'Pulsera 7',
                            'productDescription': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptate repellat necessitatibus ratione corrupti aperiam consequuntur odio.',
                            'productPrice': 69.99,
                            'imgSrc':'Content/img/products/pulsera_7.jpg',
                            'imgAlt': 'pulsera_7'},
                            {'productId': 8,
                            'productName': 'Pulsera 8',
                            'productDescription': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptate repellat necessitatibus ratione corrupti aperiam consequuntur odio.',
                            'productPrice': 69.99,
                            'imgSrc':'Content/img/products/pulsera_1.jpg',
                            'imgAlt': 'pulsera_1'},
                            {'productId': 9,
                            'productName': 'Pulsera 9',
                            'productDescription': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptate repellat necessitatibus ratione corrupti aperiam consequuntur odio.',
                            'productPrice': 69.99,
                            'imgSrc':'Content/img/products/pulsera_2.jpg',
                            'imgAlt': 'pulsera_2'},
                            {'productId': 10,
                            'productName': 'Pulsera 10',
                            'productDescription': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptate repellat necessitatibus ratione corrupti aperiam consequuntur odio.',
                            'productPrice': 69.99,
                            'imgSrc':'Content/img/products/pulsera_3.jpg',
                            'imgAlt': 'pulsera_3'},
                            {'productId': 11,
                            'productName': 'Pulsera 11',
                            'productDescription': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptate repellat necessitatibus ratione corrupti aperiam consequuntur odio.',
                            'productPrice': 69.99,
                            'imgSrc':'Content/img/products/pulsera_4.jpg',
                            'imgAlt': 'pulsera_4'},
                            {'productId': 12,
                            'productName': 'Pulsera 12',
                            'productDescription': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptate repellat necessitatibus ratione corrupti aperiam consequuntur odio.',
                            'productPrice': 69.99,
                            'imgSrc':'Content/img/products/pulsera_5.jpg',
                            'imgAlt': 'pulsera_5'},
                            {'productId': 13,
                            'productName': 'Pulsera 13',
                            'productDescription': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptate repellat necessitatibus ratione corrupti aperiam consequuntur odio.',
                            'productPrice': 69.99,
                            'imgSrc':'Content/img/products/pulsera_6.jpg',
                            'imgAlt': 'pulsera_6'},
                            {'productId': 14,
                            'productName': 'Pulsera 14',
                            'productDescription': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptate repellat necessitatibus ratione corrupti aperiam consequuntur odio.',
                            'productPrice': 69.99,
                            'imgSrc':'Content/img/products/pulsera_7.jpg',
                            'imgAlt': 'pulsera_7'},
                            {'productId': 15,
                            'productName': 'Pulsera 15',
                            'productDescription': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptate repellat necessitatibus ratione corrupti aperiam consequuntur odio.',
                            'productPrice': 69.99,
                            'imgSrc':'Content/img/products/pulsera_4.jpg',
                            'imgAlt': 'pulsera_4'},
                            {'productId': 16,
                            'productName': 'Pulsera 16',
                            'productDescription': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptate repellat necessitatibus ratione corrupti aperiam consequuntur odio.',
                            'productPrice': 69.99,
                            'imgSrc':'Content/img/products/pulsera_5.jpg',
                            'imgAlt': 'pulsera_5'},
                            {'productId': 17,
                            'productName': 'Pulsera 17',
                            'productDescription': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptate repellat necessitatibus ratione corrupti aperiam consequuntur odio.',
                            'productPrice': 69.99,
                            'imgSrc':'Content/img/products/pulsera_6.jpg',
                            'imgAlt': 'pulsera_6'},
                            {'productId': 18,
                            'productName': 'Pulsera 18',
                            'productDescription': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptate repellat necessitatibus ratione corrupti aperiam consequuntur odio.',
                            'productPrice': 69.99,
                            'imgSrc':'Content/img/products/pulsera_7.jpg',
                            'imgAlt': 'pulsera_7'}];


    $scope.GetProductDetails = function()
    {
        for(var i = 0; i < $scope.productsDetails.length; i++)
        {
            if($scope.productId == $scope.productsDetails[i].productId)
            {
                $scope.productName = $scope.productsDetails[i].productName;
                $scope.productDescription = $scope.productsDetails[i].productDescription;
                $scope.productPrice = $scope.productsDetails[i].productPrice;
                $scope.imgSrc = $scope.productsDetails[i].imgSrc;
                $scope.imgAlt = $scope.productsDetails[i].imgAlt;
                break;
            }
        }
    }

    $scope.AddToCart = function()
    {
        
    }

    $scope.RemoveProduct = function()
    {
        if($scope.product.number != 1)
            $scope.product.number -= 1;
    }

    $scope.AddProduct = function()
    {
        $scope.product.number += 1;
    }

});