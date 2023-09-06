<?php

/**
 *
 * Controller do site.
 *
 * @author Code Universe
 *
 **/
class AccountController extends Controller
{

	public function index()
	{

		$this->view('site/account/account.php');
	}

	public function imgProfile()
	{

		if (isset($_FILES['arquivo'])) {

			$status = true;

			$nameFile = $_FILES['arquivo']['name'];

			if ($_FILES['arquivo']['size'] > 5000000) {
				echo 'A imagem é muito grande';
				$status = false;
			}

			$format = strtolower(pathinfo($_FILES['arquivo']['name'], PATHINFO_EXTENSION));

			if ($format != 'png' && $format != 'jpg' && $format != 'jpeg') {
				$status = false;
			}

			$directory = 'assets/img/uploads/' . $nameFile;

			if ($status) {
				move_uploaded_file($_FILES['arquivo']['tmp_name'], $directory);

				$getID = new UserSession;
				$usuario_id = $getID->get('id');

				$addImgProfile = new UserCrud;
				$addImgProfile->addImgProfile($nameFile, $usuario_id);

				echo json_encode(array(
					'result' => true
				));
			} else {
				echo json_encode(array(
					'result' => false
				));

				return false;
			}
		} else {
			echo 'Não foi possivel ler o arquivo';
		}
	}

	public function user()
	{
		$getID = new UserSession;
		$userID = $getID->get('id');

		$getInfos = new UserData;
		$infosUser = $getInfos->getInfosUser($userID);

		echo json_encode($infosUser, JSON_PRETTY_PRINT);
	}

	public function address()
	{

		$getID = new UserSession;
		$usuario_id = $getID->get('id');

		$cep = filter_var($_POST['cep']);
		$street = filter_var($_POST['street']);
		$number = filter_var($_POST['number']);
		$neighborhood = filter_var($_POST['neighborhood']);
		$city = filter_var($_POST['city']);
		$uf = filter_var($_POST['uf']);

		$credentialsValid = true;

		if (!$cep || !$street || !$number || !$neighborhood || !$city || !$uf) {
			$credentialsValid = false;
		} else {
			$credentialsValid = true;
		}

		if (!$credentialsValid) {
			echo json_encode(array(
				'result' => false
			));

			return false;
		}

		$addAddress = new UserCrud;
		$addAddress->addAddress($cep, $street, $number, $neighborhood, $city, $uf, $usuario_id);

		echo json_encode(array(
			'result' => true
		));
	}

	public function card()
	{

		$getID = new UserSession;
		$usuario_id = $getID->get('id');

		$numberCardRegex = filter_var($_POST['numberCard']);
		$numberCard = str_replace([' '], '', $numberCardRegex);

		$month = filter_var($_POST['month']);
		$year = filter_var($_POST['year']);
		$cvv = filter_var($_POST['cvv']);

		$nameCard = filter_var($_POST['nameCard']);

		$cpfRegex = filter_var($_POST['cpf']);
		$cpf = str_replace(['.', '-'], '', $cpfRegex);

		$nick = filter_var($_POST['nick']);

		$credentialsValid = true;

		if (!$numberCard || !$month || !$year || !$cvv || !$nameCard || !$cpf || !$nick) {
			$credentialsValid = false;
		} else {
			$credentialsValid = true;
		}

		if (!$credentialsValid) {
			echo json_encode(array(
				'result' => false
			));

			return false;
		}

		$addCard = new UserCrud;
		$addCard->addCard($numberCard, $month, $year, $cvv, $nameCard, $cpf, $nick, $usuario_id);

		echo json_encode(array(
			'result' => true
		));
	}

	public function updateDataAccount()
	{

		$getID = new UserSession;
		$usuario_id = $getID->get('id');

		$getInfos = new UserData;
		$infosAccount = $getInfos->getInfosUser($usuario_id);
		$password = $infosAccount['password'];

		$userName = filter_var($_POST['userName']);
		$userLastname =  filter_var($_POST['userLastname']);
		$userEmail = filter_var($_POST['userEmail'], FILTER_VALIDATE_EMAIL);
		$userPassword = filter_var($_POST['userPassword']);

		$dataValid = true;
		$errors = array();

		if (!$userName || !$userLastname) {
			$dataValid = false;
		}

		if (!$userEmail) {
			$dataValid = false;
			$errors[] = 'userEmail';
		}

		if ($userPassword !== $password) {
			$dataValid = false;
			$errors[] = 'userPassword';
		}

		if (!$dataValid) {
			echo json_encode(array(
				'result' => false,
				'errors' => $errors
			));

			return false;
		}

		$updateDataAccount = new UserCrud;
		$updateDataAccount->updateDataAccount($userName, $userLastname, $userEmail, $usuario_id);

		echo json_encode(array(
			'result' => true
		));
	}

	public function signOut() 
	{

		$getID = new UserSession;
		$usuario_id = $getID->get('id');

		if(!$usuario_id) {
			echo json_encode(array(
				'result' => false
			));	

			return false;
		}

		$obj = new UserSession();
		$obj->deleteUser();
		
		echo json_encode(array(
			'result' => true
		));

	}
}
