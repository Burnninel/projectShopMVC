<?php

/**
*
* Verificação sobre ssl
*
* @author Code Universe
*
**/

if($env == 'prod')
{
	if (isset($_SERVER['HTTPS']) && ($_SERVER['HTTPS'] == 'on' || $_SERVER['HTTPS'] == 1) || isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https') {
		//já está usando https
	}else{
		//redireciona para https
		header('Location: https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']); 
		echo 'redirecionar';
		die();
	}
}