// JavaScript Document


function inicial() {
	var checkCidade  = document.getElementById("escolhercidade");
	var cidade = document.getElementById("cidade");

	checkCidade.onclick = function(){

		if (checkCidade.checked){
			cidade.style.display = "block";
		}
		else{
			cidade.style.display = "none";
		}
	}
	cidade.style.display = "none";
}

window.onload = function() {
	inicial();	
}