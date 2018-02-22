//#region Sticky Menu
$(document).ready(function() {
    //Ocultar el loader y mostrar el body
    document.getElementById("loader").style.display = "none";
    document.getElementById("body-content").style.display = "block";

    var stickyNavTop = $('.nav').offset().top;
    var stickyNav = function()
    {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > stickyNavTop) { 
            $('.nav').addClass('sticky');
        } else {
            $('.nav').removeClass('sticky'); 
        }
    };
    stickyNav();
    $(window).scroll(function() 
    {
        stickyNav();
    });
});
//#endregion
//#region Menu ocultable
var counter = 0;

function AnimateSidenav()
{
    if(counter == 0)
    {
        document.getElementById("sidenav").style.width = "250px";
        document.getElementById("header").style.marginLeft = "250px";
        document.getElementById("body").style.marginLeft = "250px";
        document.getElementById("footer").style.marginLeft = "250px";
        counter++;
    }
    else
    {
        document.getElementById("sidenav").style.width = "0";
        document.getElementById("header").style.marginLeft = "0";
        document.getElementById("body").style.marginLeft = "0";
        document.getElementById("footer").style.marginLeft = "0";
        counter--;
    }
}
//#endregion