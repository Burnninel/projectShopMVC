<?php

/**
*
* Definição das rotas e seus respectivos controllers e actions
*
* @author Code Universe
*
**/

// rotas normais
$commonRoutes = array(
	'home'           => 'HomeController/index',
	'signIn'         => 'SignInController/index',
	'signUp'         => 'SignUpController/index',
	'account'         => 'AccountController/index',
);

// rotas POST
$commonPost = array();

$commonRoutes = array_merge($commonRoutes, $commonPost);

return $commonRoutes;