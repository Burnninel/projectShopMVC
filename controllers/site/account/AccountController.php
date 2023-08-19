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

		var_dump($credentialsValid);


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
}