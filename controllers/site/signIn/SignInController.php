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

	public function signIn() {
        $email    = filter_var($_POST['email']);
        $password = filter_var($_POST['password']);

        $userData = new UserData;
        $user = $userData->getUser($email, $password);

        if(!$user) {
            echo json_encode((array(
                'result' => false
            )));

            return false;
        }
        
        $userSession = new UserSession;
        $userSession->saveUser($user);

        echo json_encode((array(
            'result' => true
        )));
    }

}