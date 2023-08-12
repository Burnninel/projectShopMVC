<?php

class SignUpController extends Controller {

	public function index() {		

		$this->view('site/signUp/signUp.php');

	}

	public function signUp() {
		var_dump($_POST);
        $name       = filter_var($_POST['name']);
        $lastname   = filter_var($_POST['lastname']);
        $email      = filter_var($_POST['email']);
        $password   = filter_var($_POST['password']);
        $dateCreate = (new DateTime())->format('Y-m-d');
 
        $userCrud = new UserCrud;
        $userCrud->createUser($name, $lastname, $email, $password, $dateCreate);

		echo json_encode(array(
            'result' => true
        ));
	}

}