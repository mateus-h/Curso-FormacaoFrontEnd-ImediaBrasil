// JavaScript Document

function inicial() {
	var opcaoDesktop = document.getElementById("opcaoDesktop");
	var opcaoMobile = document.getElementById("opcaoMobile");
	var janela = document.getElementById("janela");
		
		opcaoDesktop.onclick = function(){
		janela.className = "largura100pc";
		return false;
		};
	opcaoMobile.onclick = function(){
		janela.className = "largura320px";
		return false;
	};
}
window.onload = function() {
	inicial();
};