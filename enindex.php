<?php 

    session_start();

    $token = uniqid();
    $_SESSION['token'] = $token;

     $_SESSION['url'] = 'http://'.$_SERVER['SERVER_NAME'].$_SERVER["REQUEST_URI"];
     if(!isset($_SESSION["openid"]))
     {
        include_once 'weChat/weChatAutho.php';
     }else
     {
        // userinfo
        /*echo 'openid:'.$_SESSION['openid'] . '<br />';
        echo 'headimgurl:'.$_SESSION['img'] . '<br />';
        echo 'nickname:'.$_SESSION['nickname'] . '<br />';*/
     }
?>
<!DOCTYPE html>
<html lang="en">
<!-- <html lang="en" manifest="app.appcache"> -->
<head>
	<meta charset="UTF-8">
	<title>LE RENDEZ-VOUS </title>
	<meta name="format-detection" content="telephone=no" />
    <meta name="viewport" content="width=640, user-scalable=no"/>
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="format-detection" content="telephone=no">

    <link rel="stylesheet" type="text/css" href="css/app.css">
    <script src="js/jquery.js" language="javascript" type="text/javascript"></script>
    <script type="text/javascript">
    $.noConflict();
    </script>
    <script type="text/javascript" src="js/underscore.js"></script>
    <script src="js/pinchzoom.js" language="javascript" type="text/javascript"></script>
</head>

<!-- pagelist-->
<body>
<!--图库弹出层 开始-->
<div class="mskeLayBg"></div>
<div class="mskelayBox">
  <div class="mske_html pinch-zoom">
      <img src="img/en/b1.png" alt="img1" data-elem="pinchzoomer" />
  </div>
  <img class="mskeClaose" src="img/mke_close.png" width="47" height="47" />
</div>
<!--图库弹出层 结束-->
  <div class="swiper-slide p2">
    <img class="bg"src="img/en/bgen.jpg">
    <div class="msKeimgBox">
     <ul>
      <li>
      <img src="img/en/b1.png" class="e1" />
      <span class="hidden">
      <img src="img/en/b1.png" alt="img1" data-elem="pinchzoomer" />
      </span>
      </li>
      <li>
      <img src="img/en/l1&l2.png" class="e2" />
      <span class="hidden">
      <img src="img/en/l1&l2.png" alt="img2" data-elem="pinchzoomer"/>
      </span>
      </li>
      <li>
      <img src="img/en/l3.png" class="e3" />
      <span class="hidden">
      <img src="img/en/l3.png" alt="img3" data-elem="pinchzoomer"/>
      </span>
      </li>
      <li>
      <img src="img/en/l4.png" class="e4" />
      <span class="hidden">
      <img src="img/en/l4.png" alt="img4" data-elem="pinchzoomer"/>
      </span>
      </li>
      <li>
      <img src="img/en/l5.png" class="e5" />
      <span class="hidden">
      <img src="img/en/l5.png" alt="img5" data-elem="pinchzoomer"/>
      </span>
      </li>
     </ul>
    </div>
    <input type="password" id="_token" value="<?php echo $token; ?>" class="hide">
    <input id="trade1" type="text" class="in-1 e-1" >
    <input id="brand1" type="text" class="in-1 e-2" >
    <input id="name1"  type="text" class="in-1 e-3" >
    <input id="phone1" type="text" class="in-1 e-4" >
    <input id="email1" type="text" class="in-1 e-5" >            
    <img class="button1" src="img/transparent.png" >
    <div class="hit1"></div>
  </div>

<!--Script====================================================== -->
<script src="js/zepto/zepto.min.js"></script>
<script src="js/motion/landscape.min.js"></script>
<script src="js/app.js"></script>
<?php include_once 'weChat/weChatShareJS.php';?>
<script>
    app.wechat.sharecontent = app.wechat.sharecontent_en;
    var $OPENID = "<?php echo $_SESSION['openid'] ?>";
</script>
</body>
</html>