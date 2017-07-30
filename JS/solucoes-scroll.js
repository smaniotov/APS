$(document).ready(function(){

	var secondInfoPos = $(".second").position();
	var thirdInfoPos = $(".third").position();
	var forthInfoPos = $(".forth").position();
	var isOpen = false;
	var i = 1;
	var time = 500;
	while(i <= 7){
		var num = i.toString()	
		$(".li-" + i).delay(time).fadeIn(500);
		i++;
		time +=500;
	}
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
			$(".show-hide-button").fadeOut(100);
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
			}
			if($(this).scrollTop() > thirdInfoPos.top - ($("nav").height() * 1.5) ){
				$(".third-info-content").fadeIn("slow");
			}
			if($(this).scrollTop() > forthInfoPos.top - ($("nav").height() * 1.5) ){
				$(".forth-info-content").fadeIn("slow");
			}
	});
});
