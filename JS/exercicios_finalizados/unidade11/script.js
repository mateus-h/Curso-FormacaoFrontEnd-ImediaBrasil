// JavaScript Document


var banner = document.getElementById("bannerfloat");
var botao  = document.getElementById("botaofechar");

function sumirBanner() {
	banner.className = 'naovisivel';	
}

botao.onclick = function() {
	sumirBanner();
}

setTimeout(sumirBanner, 4000 ); 