// JavaScript Document


// Adicionar um zero se o valor for inferior a 10
function botarZero(valor) {
	if( valor < 10 ) {
		return '0' + valor;
	} else {
		return valor;
	}
}

// Saida em hora, minuto e segundo
function retornarTempo() {
	var dia, hora, minuto, segundo;
	
	segundo 	= tempoEmSegundos % 60;
	minuto 		= Math.floor(tempoEmSegundos / 60) % 60;
	hora 			= Math.floor(tempoEmSegundos / 3600) % 24;
	dia			= Math.floor(tempoEmSegundos / 86400);

	segundo 	= botarZero( segundo );
	minuto 		= botarZero( minuto );
	hora	 		= botarZero( hora );

	return dia + ' dia e ' + hora + ':' + minuto + ':' + segundo;
}

// escrever no elemento de saida (div) 
function mostrarTempoRestante() {
	document.getElementById('janela').innerHTML = retornarTempo();
}

// escrever no elemento de saida (div) mensagem de fim
function finalizarContagem() {
	document.getElementById('janela').innerHTML = mensagem_final;
	clearInterval( intervalo );
}

function contagemRegressiva() {
	if(tempoEmSegundos < 2) {
		contando = false;
	}		
	 
	tempoEmSegundos = tempoEmSegundos - 1;
}

function iniciarContagemRegressiva() {
	
	if (contando) {
		contagemRegressiva();
		mostrarTempoRestante();
	} else {
		finalizarContagem();
	}
	
}

var contando 		    = true;
var mensagem_final 		= 'Fim da Contagem Regressiva'; 
var tempoEmSegundos 	= 87400;
var intervalo 			= setInterval( iniciarContagemRegressiva, 1000 );