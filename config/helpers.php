<?php

/**
*
* Arquivo onde são definidos os helpers
*
* @author Code Universe
*
**/

define('LOCAL_URL', '/shopMVC');

if($env == "prod"){
	define('LOCAL_URL', 'https://www.google.com.br/');
}

return array(
	'URLHelper' 	=> new URLHelper(),
);