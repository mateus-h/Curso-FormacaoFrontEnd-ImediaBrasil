// JavaScript Document


function controleFormulario() {
	
	document.getElementById("formViagem").onsubmit = function() {
		
	
		if ( document.getElementById("nome").value == "" ) {
		
			document.getElementById("mensagem").innerHTML = "Por favor, preencha o campo nome.";	
			return false;
			
		} else {
		
			document.getElementById("mensagem").innerHTML = "";
			return true;	
			
		}
		
	}
	
}

window.onload = function() {
	controleFormulario();	
}