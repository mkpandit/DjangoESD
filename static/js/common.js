$(document).ready(function() {
    if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
        var featuredWidth = parseInt($(".featured").width()) + "px";
        console.log(featuredWidth);
        $(".featured").diyslider();
        $(".featured").diyslider("updateOptions", {
            width: featuredWidth,
            height: "200px"
        });
        $(".previous").bind("click", function() {
            $(".featured").diyslider("move", "back");
        });
        $(".next").bind("click", function() {
            $(".featured").diyslider("move", "forth");
        });
    }

    $(".slide-1").css({
        "opacity": "0",
        "display": "block"
    }).show().animate({"opacity": 1, "width": "150px", "height": "150px"}, 3000, "linear", function() {
        $(this).fadeOut(1000, function() {
            console.log("Slide 1");
            $(".slide-2").css({
                "opacity": "0",
                "display": "block"
            }).show().animate({"opacity": 1, "width": "150px", "height": "150px"}, 3000, "linear", function() {
                $(this).fadeOut(1000, function() {
                    console.log("Slide 2");
                    $(".slide-3").css({
                        "opacity": "0",
                        "display": "block"
                    }).show().animate({"opacity": 1, "width": "150px", "height": "150px"}, 3000, "linear", function() {
                        $(this).fadeOut(1000, function() {
                            console.log("Slide 3")
                            $(".slide-4").css({
                                "opacity": "0",
                                "display": "block"
                            }).show().animate({"opacity": 1, "width": "150px", "height": "150px"}, 3000, "linear", function() {
                                console.log("Slide 4")
                                $('.slide-5').css({
                                    "opacity": "0",
                                    "display": "block",
                                }).fadeIn().animate({"opacity": 1, 'fontSize': '18px'}, 3000);
                            })
                        })
                    })
                })
            })
        })
    })
    /*$('.slide-1').css({
        "opacity":"0",
        "display":"block",
    }).show().animate({opacity: 1, 'width': '150px', 'height': '150px'}, 1000, "linear", function() {
        console.log("Done with slide 1");
        $(this).hide('slow')
        $('.slide-2').css({
            "opacity": "0",
            "display": "block",
        }).show().animate({opacity: 1, 'width': '150px', 'height': '150px'}, 1000, "linear", function() {
            console.log("Done with slide 2");
            $(this).hide('slow');
            $('.slide-3').css({
                "opacity": "0",
                "display": "block",
            }).show().animate({opacity: 1, 'width': '150px', 'height': '150px'}, 1000, "linear", function() {
                console.log("Done with slide 3");
                $(this).hide('slow');
                $('.slide-4').css({
                    "opacity": "0",
                    "display": "block",
                }).show().animate({opacity: 1, 'width': '150px', 'height': '150px'}, 1000, "linear", function() {
                    console.log("Done with slide 4");
                    $('.slide-5').css({
                        "opacity": "0",
                        "display": "block",
                    }).fadeIn().animate({opacity: 1, 'fontSize': '18px'}, 2000);
                });
            });
        });
    });*/
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
