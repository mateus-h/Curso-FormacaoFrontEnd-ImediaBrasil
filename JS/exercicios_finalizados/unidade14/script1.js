// JavaScript Document

function detectarResolucao () {
	var largura = 0;
	var arquivoCss = document.getElementById("meuCSS");
	// pegar largura do browser

	if(window.innerWidth){
		largura = window.innerWidth;
	}else if(document.documentElement && document.documentElement.clientWidth){
		largura = document.documentElement.clientWidth;
	}else if(document.body){
		largura = document.body.clientWidth;
	}

	if(largura < 450){
		arquivoCss.setAttribute("href","css_smartphone.css");
	}else{
		arquivoCss.setAttribute("href","css_desktop.css");
	}
}

window.onrisize = function(){
	detectarResolucao();
}