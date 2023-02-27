$(".ui-menu").hover(function over(){
    $(this).children("ul").stop(true,true).slideToggle(120);
})
