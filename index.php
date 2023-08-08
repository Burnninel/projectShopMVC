<?php

/**
*
* Code Universe
*
* Estrutura inicial da arquitetura MVC.
* Este arquivo é responsável por executar os controllers/actions
* e iniciar o fluxo de funcionamento da aplicação.
*
* @author Code Universe
*
**/

/**
*
* Definição do charset
*
**/
ini_set('default_charset', 'utf8');

/**
*
* Definição de ambiente
*
**/
require 'config/env.php';
define('ROOT', __DIR__);
define('ENV', $env);

/**
*
* Autoloader
*
**/
require 'config/autoloader.php';

/**
*
* Rotas
*
**/
$routes = require 'config/routes.php';

/**
*
* SSL
*
**/
require 'config/ssl.php';
  
/**
*
* Obtem a rota atual
*
**/
$route  = (!empty($_GET['parameter'])) ? rtrim($_GET['parameter'], '/') : '/';
$split  = array_filter(explode('/', $route));
$params = array();


/**
*
* Pegando os valores após o controller e a action na URL
*
**/
if(count($split) > 2){
  $params = array_slice($split, 2);
}

/**
*
* Helpers
*
**/
$helpers = require 'config/helpers.php';

/**
*
* Rota sem os parâmetros para ser verificado no array $routes
*
**/
if(count($split) > 1){
  $route = $split[0] . '/' . $split[1];
}

/**
*
* Verifica se a rota existe, caso não exista é 
* executado o controller referente a erro 404
*
**/
if(!isset($routes[$route])){
  $error = new Error404($helpers);
  $error->index();
  exit;
}

/**
*
* Obtendo o controller e action
*
**/
$controllerAndAction   = explode('/', $routes[$route]);
$currentControllerName = $controllerAndAction[0];
$currentActionName     = $controllerAndAction[1];

/**
*
* Executando controller e action
*
**/

$controller = new $currentControllerName($helpers);
$controller->$currentActionName($params);