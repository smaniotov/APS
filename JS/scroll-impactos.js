$(document).ready(function(){
	var firstInfoPos = $(".first-info").position();
	var secondInfoPos = $(".second-info").position();
	var thirdInfoPos = $(".third-info").position();
	var forthInfoPos = $(".forth-info").position();
	$(window).scroll(function(){
			if($(this).scrollTop() > secondInfoPos.top - ($("nav").height() * 1.5) ){
				$(".second-info-content").fadeIn("slow");
				$(".second-info-content-inside").css("display", "inline-block");
			}if($(this).scrollTop() > thirdInfoPos.top - ($("nav").height() * 1.5) ){
				$(".third-info-content").fadeIn("slow");
				$(".third-info-content-inside").css("display", "inline-block");
			}if($(this).scrollTop() > forthInfoPos.top - ($("nav").height() * 1.5) ){
				$(".forth-info-content").fadeIn("slow");
				$(".third-info-content-inside").css("display", "inline-block");
			}
	});
});
