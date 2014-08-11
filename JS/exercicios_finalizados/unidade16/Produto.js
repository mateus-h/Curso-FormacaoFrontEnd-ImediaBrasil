	(function(janela){
			function Produto (nome,preco,estoque) {
		 	this.nome = nome;
		 	this.preco = preco;
		 	this.estoque = estoque;
		 	this.retornarInvestimento  = function(){
		 		console.log('Total Investido '+ preco * estoque);
		 	}

		 } 
		 Produto.GOSTOSO ="sim";
		 janela.Produto = Produto;
			

	}(window));