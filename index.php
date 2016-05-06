<?php 

    session_start();
     $_SESSION['url'] = 'http://'.$_SERVER['SERVER_NAME'].$_SERVER["REQUEST_URI"];
     if(!isset($_SESSION["openid"]))
     {
        include_once 'weChat/weChatAutho.php';
     }else
     {
    //     // userinfo
    //     /*echo 'openid:'.$_SESSION['openid'] . '<br />';
    //     echo 'headimgurl:'.$_SESSION['img'] . '<br />';
    //     echo 'nickname:'.$_SESSION['nickname'] . '<br />';*/
     }
?>
<!DOCTYPE html>
<html lang="en">
<!-- <html lang="en" manifest="app.appcache"> -->
<head>
	<meta charset="UTF-8">
	<title>淮海南丰荟</title>
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
      <img src="img/cn/b1.png" alt="img1" data-elem="pinchzoomer" />
  </div>
  <img class="mskeClaose" src="img/mke_close.png" width="47" height="47" />
</div>
<!--图库弹出层 结束-->
  <div class="swiper-slide p1 ">
    <img class="bg"src="img/cn/bgcn.jpg">
    <div class="msKeimgBox">
     <ul>
      <li>
      <img src="img/cn/b1.png" class="e1" />
      <span class="hidden">
      <img src="img/cn/b1.png" alt="img1" data-elem="pinchzoomer" />
      </span>
      </li>
      <li>
      <img src="img/cn/l1&l2.png" class="e2" />
      <span class="hidden">
      <img src="img/cn/l1&l2.png" alt="img2" data-elem="pinchzoomer"/>
      </span>
      </li>
      <li>
      <img src="img/cn/l3.png" class="e3" />
      <span class="hidden">
      <img src="img/cn/l3.png" alt="img3" data-elem="pinchzoomer"/>
      </span>
      </li>
      <li>
      <img src="img/cn/l4.png" class="e4" />
      <span class="hidden">
      <img src="img/cn/l4.png" alt="img4" data-elem="pinchzoomer"/>
      </span>
      </li>
      <li>
      <img src="img/cn/l5.png" class="e5" />
      <span class="hidden">
      <img src="img/cn/l5.png" alt="img5" data-elem="pinchzoomer"/>
      </span>
      </li>
     </ul>
    </div>
    <input id="trade" type="text" class="in-1 e-1" placeholder="请输入您的行业">
    <input id="brand" type="text" class="in-1 e-2" placeholder="请输入您的品牌">
    <input id="name"  type="text" class="in-1 e-3" placeholder="请输入您的姓名">
    <input id="phone" type="text" class="in-1 e-4" placeholder="请输入您的电话">
    <input id="email" type="text" class="in-1 e-5" placeholder="请输入您的电邮">            
    <img class="button" src="img/transparent.png" >
    <div class="hit"></div>
  </div>

<!--Script====================================================== -->
<script src="js/zepto/zepto.min.js"></script>
<script src="js/motion/landscape.min.js"></script>
<script src="js/app.js"></script>
<?php include_once 'weChat/weChatShareJS.php';?>
<script>
    var $OPENID = "<?php echo $_SESSION['openid'] ?>";
</script>
</body>
</html>