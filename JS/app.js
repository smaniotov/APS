(function app(){
	var indiceBrasil ={
		texto :'ocê já percebeu com que velocidade as tecnologias são substituídas ,exemplo dos telefones celulares e computadores.Quando se substitui uma tecnologia, para onde vão os equipamentos “obsoletos”? (difícil de responder esta...acho que a maioria para o lixo não é?). Está ai o motivo porque estas palavras andam juntas em seu pior sentido. Em nosso dia a dia não pensamos nisto, não pensamos o quanto uma bateria de celular ou de notebook vão poluir o solo ou os lençóis freáticos (e muitas vezes nem sabemos que poluem), ou mesmo os demais componentes como plástico e metais pesados. Nossa preocupação está geralmente em nos manter dentro da “onda”, da tecnologia.'

	};
	$(document).ready(function(){
		console.log("Foi");
	});
	var app = angular.module('lixoEletronicoIndice', [ ]);
	app.controller("after")
	app.controller("lixoEletronicoIndiceTexto", function(){
		this.info = indiceBrasil;
	});
		app.controller("myCtrl", function($scope) {
    		$scope.principalShow = function () {
    			$(".intro-view").addClass("hide-target").fadeOut(1000);
    			setTimeout(function(){
    				$(".principal-view").fadeIn(1000);
    			},1000);
    }
});
})();