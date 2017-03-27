function init(){
    let d = window.innerWidth;
    if(d < 420){
        //手机显示
        initMobile();
    }else{
        //pc显示
        initPc();
    }
}
function initMobile(){
    window.location = './iframe.html';
}
function initPc(){
    console.log('index initpc');
    var iframe = document.createElement("iframe");
    iframe.src = "./iframe.html";
    iframe.className = "iframe";
    iframe.frameBorder = "0";
    iframe.scrolling = "0";
    document.getElementById('root').appendChild(iframe);
}
window.onload = function(){
    init();
}