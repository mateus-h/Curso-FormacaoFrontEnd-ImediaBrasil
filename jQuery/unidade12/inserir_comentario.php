<?php
		// conexao com banco
		$con = mysql_connect('localhost','root','');
		mysql_select_db('imediaburguer');
		
		// pegar campos recebidos remotamente
		$meu_nome = $_POST['nome'];
		$meu_come = $_POST['comentario'];
		
		// rotina de insercao
		$mensagem = "sucesso";
		try {
			mysql_query("INSERT INTO comentarios ( nome, comentario ) values ('$meu_nome','$meu_come')");
			} catch (Exception $e) {
				$mensagem = "erro na insercao";		
		}
	
		echo $mensagem;
		mysql_close($con);
?>