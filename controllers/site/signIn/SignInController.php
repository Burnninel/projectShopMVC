<?php

/**
*
* Controller do site.
*
* @author Code Universe
*
**/
class SignInController extends Controller {

	public function index() {		

		$this->view('site/signIn/signIn.php');

	}

}