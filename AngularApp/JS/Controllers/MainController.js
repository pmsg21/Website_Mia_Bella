MiaBellaApp.controller('MainController', function($scope)
{   
    $scope.loading = false;
    $scope.banners = [{'index': 1,
                       'imgSrc': 'Content/img/banners/banner_1.jpg', 
                       'imgAlt': 'banner_1', 
                       'captionTitle': 'Original and Exclusive 1', 
                       'captionDescription': 'lorem impsum dolor sit amet, consectetuer asipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eram volutpat'},
                      {'index': 2,
                       'imgSrc': 'Content/img/banners/banner_2.jpg', 
                       'imgAlt': 'banner_2', 
                       'captionTitle': 'Original and Exclusive 2', 
                       'captionDescription': 'lorem impsum dolor sit amet, consectetuer asipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eram volutpat'},
                      {'index': 3,
                       'imgSrc': 'Content/img/banners/banner_3.jpg', 
                       'imgAlt': 'banner_3', 
                       'captionTitle': 'Original and Exclusive 3', 
                       'captionDescription': 'lorem impsum dolor sit amet, consectetuer asipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eram volutpat'},];

});