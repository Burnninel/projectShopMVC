<?php

/**
*
* Definição do ambiente (local ou online)
*
* @author Code Universe
*
**/

/**
*
* Verificação do ambiente atual
*
**/
$env = 'prod';

if(!empty($_SERVER['SERVER_NAME']) and $_SERVER['SERVER_NAME'] === 'localhost'  or $_SERVER['SERVER_NAME'] === '192.168.0.148'){
  $env = 'dev';
}

/**
*
* Controle do erro reporting de acordo com o ambiente.
*
**/
$error = true;

if($env == 'prod'){
	$error = false;
}

error_reporting(E_ALL);