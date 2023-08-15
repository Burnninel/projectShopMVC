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

	public function user() {
		
		$getID = new UserSession;
		$userID = $getID->get('id');

		$getInfos = new UserData;
		$infosUser = $getInfos->getInfosUser($userID);

		echo json_encode($infosUser, JSON_PRETTY_PRINT);

	}

}