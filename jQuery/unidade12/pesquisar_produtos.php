<?php 
	mysql_connect('localhost','root','');
	mysql_select_db('imediaburguer');		
	
	$categoriaid = 1;
	if (isset($_GET['categoria'])) {
		$categoriaid 	= $_GET['categoria'];
	}
	$produtos 	= mysql_query("SELECT produtoid, nomeproduto, foto_pequena FROM produtos WHERE categoriaID = $categoriaid");
	
	$retorno = array();
	while ($row = mysql_fetch_object($produtos)) {
		$retorno[] = $row;
	}	
	
	$meuJSON = json_encode($retorno);
	echo  $meuJSON;
?>