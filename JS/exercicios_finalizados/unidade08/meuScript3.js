var novaPizza = document.createElement("li");
var meuElemento = document.getElementById("opcoesPizza");

meuElemento.appendChild(novaPizza);
//opção 1
//novaPizza.innerHTML  = "Quatro Queijos";


//opção 2

var novoTexto = document.createTextNode("Cinco Queijos");
novaPizza.appendChild(novoTexto);