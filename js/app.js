var app = app || {};

/*-- tools
====================================================== */
app.tools = function(){};
app.tools.random = function(n, m){
    var c = m-n+1;  
    return Math.floor(Math.random() * c + n);
};

app.tools.getpageurlwithoutparam = function(){
    var url = window.location.href;
    return url.substring(0, url.indexOf("?"));
};

app.tools.getbaseurl = function(){
    var url = window.location.href;
    return url.substring(0, url.lastIndexOf("/") + 1);
};

app.tools.gotourl = function(url){
    window.location.href = url;
};

app.tools.geturlparam = function(param){
    var reg = new RegExp("(^|&)" + param + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) 
        return unescape(r[2]);
    else
        return undefined;
};

app.tools.substr = function(str, len){
    if(str.length > len)
        str = str.substring(0, len) + "...";

    return str;
};

app.tools.platform = function(){};
app.tools.platform.os = "";
app.tools.platform.debug = ""; // 强制开始指定os模式
app.tools.platform.init = function(){
    var u = navigator.userAgent;

    app.debug.console("userAgent:" + u);

    if(u.indexOf('Android') > -1 || u.indexOf('Linux') > -1)
        app.tools.platform.os = "android";
    else if(!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/))
        app.tools.platform.os = "ios";

    if(app.tools.platform.debug == "ios")
        app.tools.platform.os = "ios";
    else if(app.tools.platform.debug == "android")
        app.tools.platform.os = "android";
};

/*-- debug
====================================================== */
app.debug = function(){};
app.debug.enable = false;
app.debug.maxline = 5;
app.debug.linecount = 0;
app.debug.console = function(str){
    if(app.debug.enable)
    {
        app.debug.linecount ++;

        if($("#debug").length > 0)
        {
            if(app.debug.linecount > app.debug.maxline)
            {
                app.debug.linecount = 0;
                $("#debug").html("<br/> #" + str);
            }
            else
                $("#debug").append("<br/> #" + str);
        }else
        {
            $("body").append("<div id='debug' class='debug'></div>");
            $("#debug").append("<br/> #" + str);
        }
    }
};

/* Landscape */

    var Landscape = new mo.Landscape({
        pic: 'js/motion/landscape.png',
        picZoom: 3,
        mode:'portrait',//portrait,landscape
        prefix:'Shine'
    });


/*-- arry
====================================================== */
var enlg,lg;
/*-- P1
====================================================== */
app.p1 = function(){};
app.p1.init = function(){
     lg = ["请您填写上述信息","请您补全信息","请输入正确的11位号码","请输入正确的邮箱信息","信息正在提交中，请稍后...","报名信息提交成功！","信息已提交！","信息提交失败，请重试！"];
     $(".hit").html(lg[0]);
};

app.p1.bind_touch_event = function(){
    $(".button").on("touchend", function(){
        var trade = $("#trade").val();
        var brand = $("#brand").val();
        var name  = $("#name").val();
        var phone = $("#phone").val();
        var email = $("#email").val();
        if (trade == '' || trade == 'Trade') {
            $(".p1 .hit").html(lg[1]);
            return false;
        }
        if (brand == '' || brand == 'Trade') {
            $(".p1 .hit").html(lg[1]);
            return false;
        }
        if (name == '') {
            $(".p1 .hit").html(lg[1]);
            return false;
        }
        if (phone == '') {
            $(".p1 .hit").html(lg[1]);
            return false;
        }else{
             var patt = new RegExp(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/);
             if(!patt.test(phone)){
                 $(".p1 .hit").html(lg[2]);
                 return false;
             }
        }
        if (email == '' || email == 'Email') {
            $(".p1 .hit").html(lg[1]);
            return false;
        }else{
            var patt = new RegExp(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/);
            if(!patt.test(email)){
                 $(".p1 .hit").html(lg[3]);
                 return false;
             }
        }
        $(".p1 .hit").html(lg[4]);
        var openid = $OPENID;
        var token = $("#_token").val();
        $.post("db/adduser.php", {name: name,email: email,phone: phone,trade: trade,brand: brand,openid:openid,token: token},function(r){                

            if(r.code == "0"){
                $(".p1 .hit").html(lg[5]);
            }else if(r.code == "1"){
                $(".p1 .hit").html(lg[6]);
            }else{
                $(".p1 .hit").html(lg[7]);
            }
        },'json');
    });
};
/*-- p2
====================================================== */
app.p2 = function(){};
app.p2.init = function(){
     enlg = ["Please leave the correct information","Please wait...","successfully submitted","successfully submitted","Submit failure, please try again"];
     $(".hit1").html(enlg[0]);
};

app.p2.bind_touch_event = function(){
    $(".button1").on("touchend", function(){
        var trade = $("#trade1").val();
        var brand = $("#brand1").val();
        var name  = $("#name1").val();
        var phone = $("#phone1").val();
        var email = $("#email1").val();
        if (trade == '' || trade == 'Trade') {
            $(".p2 .hit1").html(enlg[0]);
            return false;
        }
        if (brand == '' || brand == 'Trade') {
            $(".p2 .hit1").html(enlg[0]);
            return false;
        }
        if (name == '') {
            $(".p2 .hit1").html(enlg[0]);
            return false;
        }
        if (phone == '') {
            $(".p2 .hit1").html(enlg[0]);
            return false;
        }else{
             var patt = new RegExp(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/);
             if(!patt.test(phone)){
                 $(".p2 .hit1").html(enlg[0]);
                 return false;
             }
        }
        if (email == '' || email == 'Email') {
            $(".p2 .hit1").html(enlg[0]);
            return false;
        }else{
            var patt = new RegExp(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/);
            if(!patt.test(email)){
                 $(".p2 .hit1").html(enlg[0]);
                 return false;
             }
        }
        $(".p2 .hit1").html(enlg[1]);
        var openid = $OPENID;
        var token = $("#_token").val();
        $.post("db/adduser.php", {name: name,email: email,phone: phone,trade: trade,brand: brand,openid:openid, token:token},function(r){                
            console.log(r);
            if(r.code == "0"){
                $(".p2 .hit1").html(enlg[2]);
            }else if(r.code == "1"){
                $(".p2 .hit1").html(enlg[3]);
            }else{
                $(".p2 .hit1").html(enlg[4]);
            }
        },'json');
    });
};
/*
====================图片点击放大
*/
jQuery(function(){
    //选项卡滑动切换通用
jQuery(function(){jQuery(".hoverTag .chgBtn").hover(function(){jQuery(this).parent().find(".chgBtn").removeClass("chgCutBtn");jQuery(this).addClass("chgCutBtn");var cutNum=jQuery(this).parent().find(".chgBtn").index(this);jQuery(this).parents(".hoverTag").find(".chgCon").hide();jQuery(this).parents(".hoverTag").find(".chgCon").eq(cutNum).show();})})

//选项卡点击切换通用
jQuery(function(){jQuery(".clickTag .chgBtn").click(function(){jQuery(this).parent().find(".chgBtn").removeClass("chgCutBtn");jQuery(this).addClass("chgCutBtn");var cutNum=jQuery(this).parent().find(".chgBtn").index(this);jQuery(this).parents(".clickTag").find(".chgCon").hide();jQuery(this).parents(".clickTag").find(".chgCon").eq(cutNum).show();})})

//图库弹出层
$(".mskeLayBg").height($(document).height());
$(".mskeClaose").click(function(){$(".mskeLayBg,.mskelayBox").hide()});
$(".msKeimgBox li").click(function(){
    $(".mske_html").html($(this).find(".hidden").html());
    $(".mskeLayBg").show();$(".mskelayBox").fadeIn(300); 
    setTimeout(function(){
        $(".pinch-zoom-container").css("height", "770px");
        $(".pinch-zoom-container").css("width", "560px");
    }, 500); 
});
$(".mskeTogBtn").click(function(){$(".msKeimgBox").toggleClass("msKeimgBox2");$(this).toggleClass("mskeTogBtn2")});

$('div.pinch-zoom').each(function () {
    new RTP.PinchZoom($(this), {});
});
});

app.p1.destory = function(){  
};
/*-- for android
====================================================== */
var fuckandroid = {};
fuckandroid.app = function(){};
fuckandroid.app.p1 = function(){};
fuckandroid.app.p1.bind_touch_event = function(){
};
fuckandroid.app.p2 = function(){};
fuckandroid.app.p2.bind_touch_event = function(){
};
/*-- page init
====================================================== */
(function(){
    app.p1.init();
    app.p1.bind_touch_event();
    app.p2.init();
    app.p2.bind_touch_event();
})();
