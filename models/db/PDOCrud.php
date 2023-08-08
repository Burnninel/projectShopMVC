<?php

/**
*
* Classe que realiza as operações de crud
* utilizando a PDO.
*
* @author Code Universe
*
**/
class PDOCrud
{

	private $pdo;

	public function __construct($configFile = null)
	{

		$this->pdo = PDOFactory::createPDO($configFile);

	}

	public function insert($table, $columns, $values, array $pdoValues = array())
	{

		$insert = 'INSERT INTO ' . $table . ' (' . $columns . ') VALUES(' . $values . ')';
		$stmt   = $this->pdo->prepare($insert);
		$stmt->execute($pdoValues);
		
		return $this->pdo->lastInsertId();

	}

	public function update($table, $values, $clausule, array $pdoValues = array())
	{

		$stmt   = $this->pdo->prepare('UPDATE ' . $table . ' SET ' . $values . ' ' . $clausule);
		$result = $stmt->execute($pdoValues);

		return $result;

	}

	public function delete($table, $id)
	{

		$stmt   = $this->pdo->prepare('DELETE FROM ' . $table . ' WHERE ID = :id');
		$result = $stmt->execute(array(
			':id' => $id
		));

		return $result;

	}

}