/*
document.onclick = function() {
	
	alert("Voce está clicando em qualquer lugar")
	
};

*/

window.onload = function() {

	var foto = document.getElementById("fotocoliseu");
	foto.onclick = function() {
		alert("Voce está clicando na Foto");	
	}

}