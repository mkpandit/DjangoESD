$(document).ready(function() {
    console.log('JS Added')
    var featuredWidth = parseInt($(".featured").width()) + "px";
    console.log(featuredWidth);
    $(".featured").diyslider();
    $(".featured").diyslider("updateOptions", {
        width: featuredWidth,
        height: "200px"
    });
    // use buttons to change slide
    $(".previous").bind("click", function(){
        // Go to the previous slide
        $(".featured").diyslider("move", "back");
    });
    $(".next").bind("click", function(){
        // Go to the previous slide
        $(".featured").diyslider("move", "forth");
    });
});

$(function(){
    $('div#header > .menu').on('click',function(event){
        // event.preventDefault()
        $(this).parent().find('ul').first().toggle(300);
        $(this).parent().siblings().find('ul').hide(200);

        //Hide menu when clicked outside
        $(this).parent().find('ul').mouseleave(function(){  
            var thisUI = $(this);
            $('html').click(function(){
                thisUI.hide();
                $('html').unbind('click');
            });
        });
    });  
});
