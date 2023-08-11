<?php

/**
*
* Controller do site.
*
* @author Code Universe
*
**/
class AccountController extends Controller {

	public function index() {		

		$this->view('site/account/account.php');

	}

}