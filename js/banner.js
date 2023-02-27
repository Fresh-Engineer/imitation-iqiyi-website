//手动轮播图
var nav = document.getElementById("banner-list").getElementsByTagName("li");
var navshow = document.getElementById("pic").getElementsByTagName("a");
function fun(num) {
    for (var n = 0; n < nav.length; n++) {
        nav[n].className="";
    }
    nav[num].className="now";

    for(var m=0;m<navshow.length;m++){
        navshow[m].style.display="none";
    }
    navshow[num].style.display="block";
}
