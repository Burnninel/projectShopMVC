/**
*
* Script de perfil
*
* @author Code Universe
*
**/
(function($, URL, Helpers){

	var masks = function(){
		Helpers.cpfMask($('input[name=cpf]'));
	}

	$( document ).ready(function() {
		masks()
	});

})($, URL, Helpers);