$(document).ready(function(){
	$(".first-product-view").delay(500).fadeIn("slow");
	var firstInfoPos = $(".first-info").position();
	var secondInfoPos = $(".second-info").position();
	$(window).scroll(function(){
			if($(this).scrollTop() > firstInfoPos.top - $("nav").height() * 1.5){
				$(".first-info-content").fadeIn("slow");
			}
			if($(this).scrollTop() > secondInfoPos.top - ($("nav").height() * 1.5) ){
				$(".second-info-content").fadeIn("slow");
			}
	});
});
