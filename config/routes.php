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
$commonPost = array(
	'submit' => 'SignUpController/signUp',
	'login' => 'SignInController/signIn',
	'user' => 'AccountController/user',
	'address' => 'AccountController/address',
	'card' => 'AccountController/card',
	'imgProfile' => 'AccountController/imgProfile',
	'updateDataAccount' => 'AccountController/updateDataAccount',
);

$commonRoutes = array_merge($commonRoutes, $commonPost);

return $commonRoutes;