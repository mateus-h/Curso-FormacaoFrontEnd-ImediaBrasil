<?php
 	// parametros iniciais
	$callback = isset($_GET['callback']) ? preg_replace('/[^a-zA-Z0-9$_]/s', '', $_GET['callback']) : false;
	header('Content-Type: ' . ($callback ? 'application/javascript' : 'application/json') . ';charset=UTF-8'); 
	header('Access-Control-Allow-Origin: *');
 
 	// conexar com banco
	$con = mysql_connect('localhost','root','');
	mysql_select_db('imediaburguer');		
		
	// criar consulta
	$produtos 	= mysql_query("SELECT produtoid, nomeproduto, foto_pequena, categoriaid FROM produtos");
	
	// criar objeto
	$retorno = array();
	while ($row = mysql_fetch_object($produtos)) {
		$retorno[] = $row;
	}	
 
	// saida	
	echo ($callback ? $callback . '(' : '') . json_encode($retorno) . ($callback ? ')' : '');
	
	mysql_close($con);
?>	