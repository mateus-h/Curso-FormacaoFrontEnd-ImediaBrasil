// JavaScript Document

window.onload = function() {

	document.getElementById("botao").onclick = function() {
		
		var ajax = null;
		
		if( window.XMLHttpRequest ) {   
			ajax = new XMLHttpRequest();
		} else if( window.ActiveXObject ) {
			ajax = new ActiveXObject('Msxml2.XMLHTTP');	
		}
		
		ajax.open("GET","pagina_dados.txt",true);
		ajax.send(null);
		
		ajax.onreadystatechange = function() { 
		
			if ( ajax.readyState == 4 ) {
				
				if ( ajax.status == 200 ) {
					document.getElementById("janela").innerHTML = ajax.responseText;						
				}
				
			}
		}
	}
}