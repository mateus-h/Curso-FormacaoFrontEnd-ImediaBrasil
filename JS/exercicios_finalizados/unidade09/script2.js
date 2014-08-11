window.onload = function() {
	
	var caixa_email = document.getElementById("email");
	
	caixa_email.onfocus = function() {
		if ( caixa_email.value == "Seu Email") {
			caixa_email.value = "";
		}
	}
	
	caixa_email.onblur = function() {
	
		if ( caixa_email.value == "") {
			caixa_email.value = "Seu Email";	
		}
	}

}