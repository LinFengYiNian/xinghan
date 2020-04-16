var liobj=$(".pointcenter").children();//获取所有span
var picobj=$("#pic").children();  //获取所有的轮播图片
var pic=0; //声明全局变量
for(var i=0;i<liobj.length;i++){
  $(liobj[i]).attr("index",i);//用循环遍历的方式为每个span添加自定义属性
    $(liobj[i]).stop().mouseenter(function () { //为每个span注册鼠标进入事件
       for(var j=0;j<liobj.length;j++){  //用循环遍历的方式让每一个轮播图片的透明度为0
             $("#pic").children().css("opacity",0);
           $(liobj[j]).css("color","#a09e9e");//用循环遍历的方式让每个小圆点颜色初始化
       }
       $(this).css("color","red");//当前的小圆点颜色为红色
      pic=$(this).attr("index");//获取当前小圆点的索引值
      $("#pic>li:eq("+pic+")").stop().animate({"opacity":"1"},800)//设置当前轮播图片的透明度为1
  });
}
var timeID=setInterval(Handle,5000);
$("#right").click(Handle);
function Handle() {
        if(pic===liobj.length-1){  //当pic的值为3显示最后一张图时，设置pic为-1，这样pic++就变成0，然后再设置第一张图显示出来
            pic=-1;
        }
        pic++;
        
            $("#pic").children().css("opacity",0);
        
        $("#pic>li:eq("+pic+")").stop().animate({"opacity":"1"},300);
        for (var l=0;l<liobj.length;l++){  //小圆点排他功能，先全部初始化颜色
            $(liobj[l]).css("color","#a09e9e");
        }
        $(liobj[pic]).css("color","red");//设置当前小圆点为红色
}
$(".first").mouseenter(function () {  //清理定时器
    clearInterval(timeID);
});
$(".first").mouseleave(function () {
    timeID=setInterval(Handle,5000);
});



var index=0;
  $(".rightclick").click(function(){  //右边按钮
      if (index===8){
        index=0;
        $("#clickul").css("left",214*-index+"px");
      }
           index++;
          $("#clickul").stop().animate({"left":-214*index},300);
        });
 $(".leftclick").click(function(){  //左边按钮
     if (index===0){
        index=8;
        $("#clickul").css("left",214*-index+"px");
      }
           index--;
          $("#clickul").stop().animate({"left":-214*index+"px"},300);
        });
$(".rightclick").mouseenter(function(){             //鼠标进入和离开事件
  $(this).css("background","url('images/index1/右按钮点击.png')");
});
$(".rightclick").mouseleave(function(){
  $(this).css("background","url('images/index1/右按钮.png')");
});
$(".leftclick").mouseenter(function(){
  $(this).css("background","url('images/index1/左按钮点击.png')");
});
$(".leftclick").mouseleave(function(){
  $(this).css("background","url('images/index1/左按钮.png')");
});


$("#langage,.langagechoice").mouseenter(function(){
  $(".langagechoice").css("display","block"); //语言下拉框
});
$(".langagechoice,#langage").mouseleave(function(){
  $(".langagechoice").css("display","none");
});

//中间数字轮播图第二页内容
$("#pages1").mouseenter(function(){
  $(this).css("overflow","hidden");
  $("#page1").css("display","block");

});
$("#page1").mouseleave(function(){
   $("#pages1").css("display","block");
  $(this).css("display","none");
});
$("#pages2").mouseenter(function(){
  $(this).css("overflow","hidden");
  $("#page2").css("display","block");

});
$("#page2").mouseleave(function(){
   $("#pages2").css("display","block");
  $(this).css("display","none");
});
$("#pages3").mouseenter(function(){
  $(this).css("overflow","hidden");
  $("#page3").css("display","block");

});
$("#page3").mouseleave(function(){
   $("#pages3").css("display","block");
  $(this).css("display","none");
});
$("#pages4").mouseenter(function(){
  $(this).css("overflow","hidden");
  $("#page4").css("display","block");

});
$("#page4").mouseleave(function(){
   $("#pages4").css("display","block");
  $(this).css("display","none");
});
$("#pages5").mouseenter(function(){
  $(this).css("overflow","hidden");
  $("#page5").css("display","block");

});
$("#page5").mouseleave(function(){
   $("#pages5").css("display","block");
  $(this).css("display","none");
});
$("#pages6").mouseenter(function(){
  $(this).css("overflow","hidden");
  $("#page6").css("display","block");

});
$("#page6").mouseleave(function(){
   $("#pages6").css("display","block");
  $(this).css("display","none");
});
$("#pages7").mouseenter(function(){
  $(this).css("overflow","hidden");
  $("#page7").css("display","block");

});
$("#page7").mouseleave(function(){
   $("#pages7").css("display","block");
  $(this).css("display","none");
});
$("#pages8").mouseenter(function(){
  $(this).css("overflow","hidden");
  $("#page8").css("display","block");

});
$("#page8").mouseleave(function(){
   $("#pages8").css("display","block");
  $(this).css("display","none");
});
$("#pages9").mouseenter(function(){
  $(this).css("overflow","hidden");
  $("#page9").css("display","block");

});
$("#page9").mouseleave(function(){
   $("#pages9").css("display","block");
  $(this).css("display","none");
});
$("#pages10").mouseenter(function(){
  $(this).css("overflow","hidden");
  $("#page10").css("display","block");

});
$("#page10").mouseleave(function(){
   $("#pages10").css("display","block");
  $(this).css("display","none");
});
$("#pages11").mouseenter(function(){
  $(this).css("overflow","hidden");
  $("#page11").css("display","block");

});
$("#page11").mouseleave(function(){
   $("#pages11").css("display","block");
  $(this).css("display","none");
});
$("#pages12").mouseenter(function(){
  $(this).css("overflow","hidden");
  $("#page12").css("display","block");

});
$("#page12").mouseleave(function(){
   $("#pages12").css("display","block");
  $(this).css("display","none");
});
$("#pages13").mouseenter(function(){
  $(this).css("overflow","hidden");
  $("#page13").css("display","block");

});
$("#page13").mouseleave(function(){
   $("#pages13").css("display","block");
  $(this).css("display","none");
});
$("#pages14").mouseenter(function(){
  $(this).css("overflow","hidden");
  $("#page14").css("display","block");

});
$("#page14").mouseleave(function(){
   $("#pages14").css("display","block");
  $(this).css("display","none");
});
$("#pages15").mouseenter(function(){
  $(this).css("overflow","hidden");
  $("#page15").css("display","block");

});
$("#page15").mouseleave(function(){
   $("#pages15").css("display","block");
  $(this).css("display","none");
});
$("#pages16").mouseenter(function(){
  $(this).css("overflow","hidden");
  $("#page16").css("display","block");

});
$("#page16").mouseleave(function(){
   $("#pages16").css("display","block");
  $(this).css("display","none");
});



$(".aboutus,.slide1").mouseenter(function () {
    $(".slide1").stop().slideDown(200);
    $(".aboutus>a").css("color","#BE232B");
});
$(".productcenter,.slide2").mouseenter(function(){
  $(".slide2").stop().slideDown(200);
  $(".productcenter>a").css("color","#BE232B");
});
$(".worksmethod,.slide3").mouseenter(function(){
  $(".slide3").stop().slideDown(200);
  $(".worksmethod>a").css("color","#BE232B");
});
$(".companynews,.slide4").mouseenter(function(){
  $(".slide4").stop().slideDown(200);
  $(".companynews>a").css("color","#BE232B");
  });
$(".lastone,.slide5").mouseenter(function(){
  $(".slide5").stop().slideDown(200);
  $(".lastone>a").css("color","#BE232B");
});

$(".aboutus,.slide1").mouseleave(function () {
    $(".slide1").stop().slideUp(200);
    $(".aboutus>a").css("color","");
});
$(".productcenter,.slide2").mouseleave(function(){
   $(".slide2").stop().slideUp(200);
    $(".productcenter>a").css("color","");
});
$(".worksmethod,.slide3").mouseleave(function(){
   $(".slide3").stop().slideUp(200);
    $(".worksmethod>a").css("color","");
});
$(".companynews,.slide4").mouseleave(function(){
   $(".slide4").stop().slideUp(200);
    $(".companynews>a").css("color","");
});
$(".lastone,.slide5").mouseleave(function(){
   $(".slide5").stop().slideUp(200);
    $(".lastone>a").css("color","");
});

$(".radius1").mouseenter(function(){
  $(".sim").css("display","block");
});
$(".radius1").mouseleave(function(){
  $(".sim").css("display","none");
});
$(".radius2").mouseenter(function(){
  $(".guimian").css("display","block");
});
$(".radius2").mouseleave(function(){
  $(".guimian").css("display","none");
});
$(".radius3").mouseenter(function(){
  $(".ota").css("display","block");
});
$(".radius3").mouseleave(function(){
  $(".ota").css("display","none");
});
$(".radius4").mouseenter(function(){
  $(".wulian").css("display","block");
});
$(".radius4").mouseleave(function(){
  $(".wulian").css("display","none");
});
$(".radius5").mouseenter(function(){
  $(".jinrong").css("display","block");
});
$(".radius5").mouseleave(function(){
  $(".jinrong").css("display","none");
});
$(".radius6").mouseenter(function(){
  $(".glo").css("display","block");
});
$(".radius6").mouseleave(function(){
  $(".glo").css("display","none");
});
$(".radius7").mouseenter(function(){
  $(".yun").css("display","block");
});
$(".radius7").mouseleave(function(){
  $(".yun").css("display","none");
});


$(".dl2 dt").mouseenter(function(){
  $(".centertwo").stop().slideDown(250);
  $(".centerone").stop().slideUp(250);
});
$(".dl2").mouseleave(function(){
  $(".centertwo").stop().slideUp(250);
  $(".centerone").stop().slideDown(250);
});
$(".dl3 dt").mouseenter(function(){
  $(".centerthree").stop().slideDown(250);
  $(".centerone").stop().slideUp(250);
});
$(".dl3").mouseleave(function(){
  $(".centerthree").stop().slideUp(250);
  $(".centerone").stop().slideDown(250);
});
$(".dl4 dt").mouseenter(function(){
  $(".centerfour").stop().slideDown(250);
  $(".centerone").stop().slideUp(250);
});
$(".dl4").mouseleave(function(){
  $(".centerfour").stop().slideUp(250);
  $(".centerone").stop().slideDown(250);
});
