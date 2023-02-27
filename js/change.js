//新片推荐栏目用
$(function (){
    /*右按钮*/
    $(".you").click(function (){
        nextscroll();
    });
    function nextscroll(){
        var hidden = $(".hidden-box");
        var offset = ($(".hidden-box li").width())*-1;
        hidden.stop().animate({marginLeft:offset},"fast",function (){
            var firstItem = $(".hidden-box ul li").first();
            hidden.find(".fielder").append(firstItem);
            $(this).css("margin-left","0px");
        });
    };
    /*左按钮*/
    $(".zuo").click(function (){
        var hidden = $(".hidden-box");
        var offset = ($(".hidden-box li").width()*-1);
        var lastItem = $(".hidden-box ul li").last();
        hidden.find(".fielder").prepend(lastItem);
        hidden.css("margin-left",offset);
        hidden.animate({marginLeft:"0px"},"fast")
    });
});
//聚焦欧冠栏目用
$(function (){
    // 右按钮
    $(".you").click(function (){
        nextscroll();
    });
    function nextscroll(){
        var com = $("#competition");
        var offset = ($("#competition li").width())*-1;
        com.stop().animate({marginLeft:offset},"fast",function (){
            var firstItem = $("#competition ul li").first();
            com.find("#com").append(firstItem);
            $(this).css("margin-left","0px");
        });
    };
    /*左按钮*/
    $(".zuo").click(function (){
        var com = $("#competition");
        var offset = ($("#competition li").width()*-1);
        var lastItem =  $("#competition ul li").last();
        com.find("#com").prepend(lastItem);
        com.css("margin-left",offset);
        com.animate({marginLeft:"0px"},"fast")
    });
});
