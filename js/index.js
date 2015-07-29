var index = 0;//point的下标

//初始化
$(document).ready(function(){
	
	var interval = setInterval(carousel, "1000");

	$(".banner .big").mouseover(function() {
		clearInterval(interval);
	});

	$(".point a").mouseover(function() {
		clearInterval(interval);
		$(".point a").removeClass("p-on");
		$(this).addClass("p-on");
		var left = -774 * $(".point a").index(this);
		$(".main").css("left", left+"px");
	});

	$(".banner .big").mouseout(function() {
		index = $(".point a").index($(".p-on"));
		interval = setInterval(carousel, "1000");
	})

})

//轮播
function carousel () {

	if (index <= 5) {
		$(".point a").removeClass("p-on");
		$(".point a:eq("+index+")").addClass("p-on");
		var left = -774 * index;
		$(".main").css("left", left+"px");	
		index++;
		if(index == 6) index = 0;
	}

}//carousel end