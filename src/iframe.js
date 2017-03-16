var setFont = function (w, d) {//w : window d : document
    if (!w || !d) {
        return;
    }
    var wd = w.innerWidth;
    var doc = d.documentElement;
    if (w.innerWidth > 640 || w.innerWidth == 640) {
        doc.style.fontSize = "100px";
    } else {
        doc.style.fontSize = 100 * (wd / 640) + "px";
    }
}
window.onload = function () {
    setFont(window, document);
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: 5000,//可选选项，自动滑动
    });
    if(typeof $ == undefined){
        var $ = jQuery;
    }else{
        var _$ = $;
        $ = jQuery;
    }
    $("#nav button").on("vclick",function(){
        alert("s");
    })
}