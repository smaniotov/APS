
$(document).ready(function(){
	
	function scrollTo(element){
		var elementPos = $(element).position();
		$(element).stop();
		$("html, body").animate({scrollTop : elementPos.top - $("nav").height()}, 1000);
	}

	var firstInfoPos = $(".first-info").position();
	var secondInfoPos = $(".second-info").position();
	var thirdInfoPos = $(".third-info").position();
	var isOpen = false;
	
	$(".show-hide-button").click(function(){
		scrollTo(".third-info");
		if (isOpen) {
			$(".third-info").animate({height:"50vh"}, 100);
			$(".leis").slideUp(1100);
			setTimeout(function(){
				$(".show-hide-button").html("Mostrar leis")
			},1200);
			
		}else{
			$(".third-info").animate({height:"170vh"});	
			$(".show-hide-button").hide();
			setTimeout(function(){
				$(".leis").fadeIn("slow");
				$(".show-hide-button").fadeIn();
				$(".show-hide-button").html("Esconder leis");
			},1000);
			
		}
		isOpen = !isOpen;
		console.log(isOpen);
	});
	$(window).scroll(function(){
			if($(this).scrollTop() > secondInfoPos.top - ($("nav").height() * 1.5) ){
				$(".second-info-content").fadeIn("slow");
				$(".second-info-content-inside").css("display", "inline-block");
			}
			if($(this).scrollTop() > thirdInfoPos.top - ($("nav").height() * 10) ){
				$(".third-info-content").fadeIn("slow");
				$(".third-info-content-inside").css("display", "inline-block");
			}
	});
});
