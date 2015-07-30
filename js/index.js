var index = 0;//point的下标
var f_index = 0;

//初始化
$(document).ready(function(){

	//焦点栏的轮播
	var interval = setInterval(carousel, "3000");

	$(".banner .big").mouseover(function() {
		clearInterval(interval);
	});

	$(".banner .point a").mouseover(function() {
		clearInterval(interval);
		$(".banner .point a").removeClass("p-on");
		$(this).addClass("p-on");
		// var left = -774 * $(".banner .point a").index(this);
		var left = -774 * $(this).index();
		$(".banner .main").css("left", left+"px");
	});

	$(".banner .big").mouseout(function() {
		index = $(".banner .point a").index($(".p-on"));
		interval = setInterval(carousel, "3000");
	});

	//1楼的轮播
	var f_in = setInterval(f_carousel, "3000");

	$(".floor .c-big-list").mouseover(function() {
		clearInterval(f_in);
	});

	$(".floor .point a").mouseover(function() {
		clearInterval(f_in);
		$(".floor .point a").removeClass("p-on");
		$(this).addClass("p-on");
		$(".floor .c-big-list>li").css("display", "none");
		$(".floor .c-big-list>li:eq("+$(this).index()+")").css("display", "block");
	});

	$(".floor .c-big-list").mouseout(function() {
		index = $("floor .point a").index($(".p-on"));
		f_in = setInterval(f_carousel, "3000");
	});

});

//轮播
function carousel () {

	if (index <= 5) {
		$(".banner .point a").removeClass("p-on");
		$(".banner .point a:eq("+index+")").addClass("p-on");
		var left = -774 * index;
		$(".banner .main").css("left", left+"px");	
		index++;
		if(index == 6) index = 0;
	}

}//carousel end

//1楼轮播
function f_carousel () {

	if (f_index <= 1) {
		$(".floor .point a").removeClass("p-on");
		$(".floor .point a:eq("+f_index+")").addClass("p-on");
		$(".floor .c-big-list>li").css("display", "none");
		$(".floor .c-big-list>li:eq("+f_index+")").css("display", "block");
		f_index++;
		if(f_index == 2) f_index = 0;
	}

}//carousel end