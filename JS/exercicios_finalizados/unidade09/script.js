/*
document.onclick = function() {
	
	alert("Voce est� clicando em qualquer lugar")
	
};

*/

window.onload = function() {

	var foto = document.getElementById("fotocoliseu");
	foto.onclick = function() {
		alert("Voce est� clicando na Foto");	
	}

}