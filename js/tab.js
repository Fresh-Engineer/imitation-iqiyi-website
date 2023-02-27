$(document).ready(function (){
    $("#button1").hover(function (){
        $("#active1").css("z-index","125");
        $("#active2").css("z-index","20");
        $("#button1").css("color","#00be06");
        $("#button2").css("color","#ffffff");
    });
    $("#button2").hover(function (){
        $("#active2").css("z-index","125");
        $("#active1").css("z-index","20");
        $("#button2").css("color","#00be06");
        $("#button1").css("color","#ffffff");
    });
    $("#button3").hover(function (){
        $("#active3").css("z-index","125");
        $("#active4").css("z-index","20");
        $("#button3").css("color","#00be06");
        $("#button4").css("color","#ffffff");
    });
    $("#button4").hover(function (){
        $("#active4").css("z-index","125");
        $("#active3").css("z-index","20");
        $("#button4").css("color","#00be06");
        $("#button3").css("color","#ffffff");
    });

})
