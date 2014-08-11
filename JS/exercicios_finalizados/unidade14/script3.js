// JavaScript Document

javascript_countdown = function () {
	var tempo_restante 		= 10; 
	var elementosaida_id 	= 'janela';
	var contando 				= true;
	var mensagem_final 		= 'Fim da contagem regressiva!';
 
 	
	function countdown() {
		if(tempo_restante < 2) {
			contando = false;
		}		
		 
		tempo_restante = tempo_restante - 1;
	}
 
 	// Adicionar zero antes de numeros menores que 10
	function botarZero(valor) {
		if( valor < 10 ) {
			return '0' + valor;
		} else {
			return valor;
		}
	}
 
 	// Saida em hora, minuto e segundo
	function retornarTempo() {
		var hora, minuto, segundo;
		
		segundo 	= tempo_restante % 60;
		minuto 		= Math.floor(tempo_restante / 60) % 60;
		hora 			= Math.floor(tempo_restante / 3600) % 24;
		dia			= Math.floor(tempo_restante / 86400);
 
		segundo 	= botarZero( segundo );
		minuto 		= botarZero( minuto );
		hora	 		= botarZero( hora );
 
		return dia + ' dia ' + hora + ':' + minuto + ':' + segundo;
	}
 
 	// escrever no elemento de saida (div) 
	function mostrarTempoRestante() {
		document.getElementById(elementosaida_id).innerHTML = retornarTempo();
	}
 
 	// escrever no elemento de saida (div) mensagem de fim
	function finalizarCountdown() {
		document.getElementById(elementosaida_id).innerHTML = mensagem_final;
	}
 
	return {
		contar: function () {
			countdown();
			mostrarTempoRestante();
		},
		
		timer: function () {
			javascript_countdown.contar();
 
			if(contando) {
				setTimeout("javascript_countdown.timer();", 1000);
			} else {
				finalizarCountdown();
			}
		},
		
		inicial: function (tempoemsegundos, elemento_id) {
			tempo_restante = tempoemsegundos;
			elementosaida_id = elemento_id;
			javascript_countdown.timer();
		}
	};
}();
 
//tempo para contagem regressiva em segundos e o elemento de saida (div)
javascript_countdown.inicial(259200, 'janela');