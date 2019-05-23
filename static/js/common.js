$(document).ready(function() {
    if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
        var featuredWidth = parseInt($(".featured").width()) + "px";
        console.log(featuredWidth);
        $(".featured").diyslider({
            width: featuredWidth,
            height: "250px",
            animationEasing: "linear",
            animationDuration: 2000,
            animationAxis: "x"
        });
        $(".featured").diyslider("updateOptions", {
            width: featuredWidth
        });
        // set up a timer to change slides automatically
        $(".featured").diyslider("move", "forth");
            setInterval(function(){
                $(".featured").diyslider("move", "forth");
        }, 5000);

        $(".previous").bind("click", function() {
            $(".featured").diyslider("move", "back");
        });

        $(".next").bind("click", function() {
            $(".featured").diyslider("move", "forth");
        });
    }

    var animationDelay = 500
    var fadeOutDelay = 1000
    $(".slide-1").css({
        "opacity": "0",
        "display": "block"
    }).show().animate({"opacity": 1, "width": "150px", "height": "150px"}, animationDelay, "linear", function() {
        $(this).fadeOut(fadeOutDelay, function() {
            console.log("Slide 1");
            $(".slide-2").css({
                "opacity": "0",
                "display": "block"
            }).show().animate({"opacity": 1, "width": "150px", "height": "150px"}, animationDelay, "linear", function() {
                $(this).fadeOut(fadeOutDelay, function() {
                    console.log("Slide 2");
                    $(".slide-3").css({
                        "opacity": "0",
                        "display": "block"
                    }).show().animate({"opacity": 1, "width": "150px", "height": "150px"}, animationDelay, "linear", function() {
                        $("#slide-3-text").animate({"opacity": 1, "fontSize": "20px"})
                        console.log("Slide 3")
                        $('.slide-4').css({
                            "opacity": "0",
                            "display": "block",
                        }).fadeIn().animate({"opacity": 1, 'fontSize': '20px'}, 1000);
                    });
                });
            });
        });
    });
});

$(function(){
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
