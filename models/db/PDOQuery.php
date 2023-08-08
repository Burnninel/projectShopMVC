<?php

/**
*
* Classe que executa queries utilizando a PDO.
*
* @author Code Universe
*
**/
class PDOQuery
{

	private $pdo;

	public function __construct($configFile = null)
	{

		$this->pdo = PDOFactory::createPDO($configFile);

	}

	public function executeQuery($query, array $pdoValues = array())
	{

		$stmt = $this->pdo->prepare($query);
		$stmt->execute($pdoValues);

		return $stmt;

	}

	public function fetch($select, array $pdoValues = array())
	{

		$stmt = $this->pdo->prepare($select);
		$stmt->execute($pdoValues);
		$row  = $stmt->fetch(PDO::FETCH_ASSOC);

		return $row;

	}

	public function fetchAll($select, array $pdoValues = array())
	{

		$stmt = $this->pdo->prepare($select);
		$stmt->execute($pdoValues);
		$rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

		return $rows;

	}

}