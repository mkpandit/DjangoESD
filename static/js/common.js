$(document).ready(function() {
    if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
        $("#content-slider").lightSlider({
            item: 1,
            pauseOnHover: true,
            pause: 5000,
            loop:true,
            keyPress:true,
            auto:true
        });
        slider();
    }
});

$(window).resize(function () {
    slider()
});

$(function() {
    $('div#header > .menu > a.menu-click').on('click',function(event){
        event.preventDefault()
        $(this).parent().find('ul').first().toggle(300);
        $(this).parent().siblings().find('ul').hide(200);
        $(this).parent().find('ul').mouseleave(function() {
            var thisUI = $(this);
            $('html').click(function(){
                thisUI.hide();
                $('html').unbind('click');
            });
        });
    });  
});

$(function() {
    $('ul.dropdown-submenu').hide();
    $('li#product-submenu').hover(function () {
    if ($('> ul.dropdown-submenu',this).length > 0) {
        $('> ul.dropdown-submenu',this).stop().slideDown('slow');
    }
    },function () {
        if ($('> ul.dropdown-submenu',this).length > 0) {
            $('> ul.dropdown-submenu',this).stop().slideUp('slow');
        }
    });  
});

function slider() {
    console.log(window.width)
    var sliderContainerWidth = parseInt($('#slider').width())
    console.log(sliderContainerWidth)
    var leftPosition = parseInt( ( ( sliderContainerWidth  - 200 ) / 2 ) + ( sliderContainerWidth / 20 ) ) + 20
    $('.slide-1').show()
        .animate({
            "opacity": 1,
            "width": "200px",
            "height": "200px", 
            "left": leftPosition+"px"}, 1500, "swing"
        ).fadeOut().animate({
            "opacity": 0,
            "width": "0px",
            "height": "0px"}, 500, "swing"
        )
        $('.slide-2').delay(1000).show()
            .animate({
                "opacity": 1,
                "width": "200px",
                "height": "126px",
                "left": leftPosition+"px"}, 1500, "swing"
            ).fadeOut().animate({
                "opacity": 0,
                "width": "0px",
                "height": "0px"}, 500, "swing"
            )
            $('.slide-3').delay(2000).show()
            .animate({
                "opacity": 1,
                "width": "200px",
                "height": "189px",
                "left": leftPosition+"px"}, 1500, "swing",
                function() {
                    $("#slide-3-text").animate({"opacity": 1, "fontSize": "20px"})
                    $('.slide-4').css({
                        "opacity": "0",
                        "display": "block",
                    }).fadeIn().animate({
                        "opacity": 1,
                        'fontSize': '20px',
                        "top": "195px"}, 1000
                    );
            })
}