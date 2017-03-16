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
if (typeof $ == undefined) {
    var $ = jQuery;
} else {
    var _$ = $;
    $ = jQuery;
}
window.onload = function () {
    setFont(window, document);
    var mySwiper = new Swiper('#swiper-container', {
        autoplay: 5000,//可选选项，自动滑动
    });
    $("#nav button").on("click", function (e) {
        if ($(this).hasClass("btn-primary")) {
            return;
        } else {
            $("#nav button").removeClass("btn-default").removeClass("btn-primary").addClass("btn-default");
            $(this).removeClass("btn-default").addClass("btn-primary");
            switchNav($(this).attr("data-key"));
        }
    });
    $("#input-group-search").on("click",function(e){
        searchFruit($(this).parent().prev().val());
    });
    var mySwiper2 = new Swiper('#swiper-container-2', {
        autoplay: 5000,//可选选项，自动滑动
        pagination : '.swiper-pagination',
        paginationElement : 'li',
    });
}
//切换显示部分
function switchNav(key) {
    $("body section").hide()
    $(".details-"+key).show();
}

function searchFruit(keyword){
    alert(keyword);
}