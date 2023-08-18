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

		$numberCardRegex = isset($_POST["numberCard"]) ? $_POST["numberCard"] : "";
		$numberCard = str_replace([' '], '', $numberCardRegex);

		$month = isset($_POST["month"]) ? $_POST["month"] : "";
		$year = isset($_POST["year"]) ? $_POST["year"] : "";
		$cvv = isset($_POST["cvv"]) ? $_POST["cvv"] : "";

		$name = isset($_POST["nameCard"]) ? $_POST["nameCard"] : "";

		$cpfRegex = isset($_POST["cpf"]) ? $_POST["cpf"] : "";
		$cpf = str_replace(['.', '-'], '', $cpfRegex);

		$nick = isset($_POST["nick"]) ? $_POST["nick"] : "";
		$credentialsValid = true;

		var_dump($numberCard, $month, $year, $cvv, $name, $cpf, $nick);

		if (!$numberCard || !$month || !$year || !$cvv || !$name || !$cpf || $nick) {
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
		$addAddress->addCArd($numberCard, $month, $year, $cvv, $name, $cpf, $nick, $usuario_id);

		echo json_encode(array(
			'result' => true
		));
	}
}
