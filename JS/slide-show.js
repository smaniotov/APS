//definição das imagens e do indice que vai mostrar qual deve ser
var images =["IMG/image1.jpg", "IMG/image2.jpg,", "IMG/image3.jpg"];
var i = 0;
var j = 0;
var currentImage = $(".current-image");
currentImage.attr("src",images[0]);

//definição das funções

function next(){
	if (i == 2) {
		i = -1;
	}
	nextImage.animate({marginLeft:"0px"}, 1000, "easeInOutQuart");
	setTimeout(function(){

}, 1000);
}


function previous(){

}

$(document).ready(function(){
	$(".current-image").attr("src",images[i]);
	next();
});