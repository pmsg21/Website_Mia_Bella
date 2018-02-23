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
//#endregion Registro
$(document).ready(function () {
    //Initialize tooltips
    $('.nav-tabs > li a[title]').tooltip();

    //Wizard
    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

        var $target = $(e.target);

        if ($target.parent().hasClass('disabled')) {
            return false;
        }
    });

    $(".next-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        $active.next().removeClass('disabled');
        nextTab($active);

    });
    $(".prev-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        prevTab($active);

    });
});

function nextTab(elem) {
    $(elem).next().find('a[data-toggle="tab"]').click();
}
function prevTab(elem) {
    $(elem).prev().find('a[data-toggle="tab"]').click();
}


//according menu

$(document).ready(function()
{
    //Add Inactive Class To All Accordion Headers
    $('.accordion-header').toggleClass('inactive-header');

    //Set The Accordion Content Width
    var contentwidth = $('.accordion-header').width();
    $('.accordion-content').css({});

    //Open The First Accordion Section When Page Loads
    $('.accordion-header').first().toggleClass('active-header').toggleClass('inactive-header');
    $('.accordion-content').first().slideDown().toggleClass('open-content');

    // The Accordion Effect
    $('.accordion-header').click(function () {
        if($(this).is('.inactive-header')) {
            $('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
            $(this).toggleClass('active-header').toggleClass('inactive-header');
            $(this).next().slideToggle().toggleClass('open-content');
        }

        else {
            $(this).toggleClass('active-header').toggleClass('inactive-header');
            $(this).next().slideToggle().toggleClass('open-content');
        }
    });

    return false;
});
//#region