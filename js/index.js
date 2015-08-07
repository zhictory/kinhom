/*
    by zhictory 2015-08-07
*/

$(document).ready(function(){
    /* 回到顶部开始 */
    //生成侧边
    var $div = $("<div id='topSide' class='topSide'></div>");
    var $ul = $("<ul></ul>");
    var $li1 = $("<li><a href='javascript:void(0)'><b class='orange'></b><i class='online'></i><span class='orange'>在线客服</span></a></li>");    
    var $li2 = $("<li><a href='javascript:void(0)'><b class='blue'></b><i class='qq'></i><span class='blue'>QQ客服</span></a></li>");    
    var $li3 = $("<li><a href='javascript:void(0)'><b class='sky'></b><i></i><span class='sky'>购物车</span></a></li>");    
    var $li4 = $("<li id='gotop'><a href='javascript:void(0)'><b class='green'></b><i></i><span class='green'>回到顶部</span></a></li>");    
    $ul.append($li1,$li2,$li3,$li4);
    $div.append($ul);
    $("body").append($div);
    //回到顶部的效果
    $("#gotop").click(function(){
        $("html,body").stop().animate({scrollTop:"0px"},300);
    });
    //鼠标移入移出效果
    $(".topSide li").mouseenter(function(){
        $(this).stop().animate({left:"-62"},500);
    });
    $(".topSide li").mouseleave(function(){
        $(this).stop().animate({left:"0"},500);
    });
    /* 回到顶部结束 */
    /* 焦点图 */
    $(".slideBox").slide({
        titCell:".s-hd li",
        mainCell:".s-bd ul",
        trigger:"click",
        autoPlay:true,
        delayTime:"1000"
    });
    /* 频道楼层内部大图 */
    $(".c-slideBox").slide({
        titCell:".c-hd li",
        mainCell:".c-bd ul",
        trigger:"mouseover",
        autoPlay:true,
        delayTime:"1000"
    });
    /* 频道楼层外部大图 */
    $(".f-slideBox").slide({
        titCell:".f-hd li",
        mainCell:".f-bd",
        trigger:"mouseover",
        delayTime:"1000",
        startFun:function(i,c,s){
            $(s).find(".tab-arrow").animate({left:140*i+"px"},150);
        }
    });
    /* 装修汇 */
    $(".d-slideBox").slide({
        mainCell:".d-bd ul",
        trigger:"click",
        delayTime:"1000"
    });
    /* 评论 */
    $(".c-v-slideBox").slide({
        titCell:".c-v-hd li",
        mainCell:".c-v-bd ul",
        effect:"topLoop",
        vis:1,
        autoPlay:true,
        delayTime:500
    });
    /* 最新购买 */
    $(".c-l-slideBox").slide({
        mainCell:".c-l-bd ul",
        effect:"topLoop",
        vis:3,
        autoPlay:true,
        delayTime:1000
    });
})