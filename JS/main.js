function scrollTo(element){
	var elementPos = $(element).position();
	$(element).stop();
	$("html, body").animate({scrollTop : elementPos.top - $("nav").height()}, 1000, "easeInOutExpo");
}

var navbar = '<nav class="medium"><div id="nav-icon" class="menu-icon"> <span></span> <span></span> <span></span> <span></span> </div> <div class="logo"><span class="menu-content"><a href="home.html"> WorldBat</a></span></div><div class="menu-item home menu-target"><span class="menu-content"><a href="home.html"> Home</a></span></div> <div class="menu-item menu-target"><span class="menu-content"><a href="impactos.html"> Impactos Ambientais</a></span></div> <div class="menu-item menu-target"><span class="menu-content"><a href="legislacoes.html"> Legislações</a></span></div> <div class="menu-item menu-target"><span class="menu-content "><a href="solucoes.html">Soluções</a></span></div></nav>';
var footer ='<footer><span class="footer-text"> World Battery ©, All Rights reserved.</span></footer>';

$(document).ready(function(){
	$("body").prepend(navbar);
	$("body").append(footer);
	$(".menu-icon").click(function(){
		$(".menu-content").show("fast");
		$(".menu-item").fadeToggle("fast");
		$("#nav-icon").toggleClass("open");
	});
		$(".seta").click(function(){
			scrollTo(".first-info");
		});
		$(".seta-2").click(function(){
			scrollTo(".second-info");
		});
		$(".seta-up").click(function(){
			$("nav, html, body").stop();
			$("html, body").animate({scrollTop : 0}, 1000, "easeInOutExpo");
		});
});



