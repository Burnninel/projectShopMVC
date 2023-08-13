<?php

class SignUpController extends Controller {

	public function index() {		

		$this->view('site/signUp/signUp.php');

	}

	public function signUp() {
        $name       = filter_var($_POST['name']);
        $lastname   = filter_var($_POST['lastname']);
        $email      = filter_var($_POST['email']);
        $password   = filter_var($_POST['password']);
        $dateCreate = (new DateTime())->format('Y-m-d');

        $emailCrud = new UserData;
        $emailTeste = $emailCrud->getEmail($email);

        if ($emailTeste) {
            echo json_encode(array(
                'result' => false
            ));

            return false;
        } 

        $userCrud = new UserCrud;
        $userCrud->createUser($name, $lastname, $email, $password, $dateCreate);
        
        echo json_encode(array(
            'result' => true
        ));

	}

}