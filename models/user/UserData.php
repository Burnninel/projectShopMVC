<?php

class UserData {

    private $pdoQuery;

    public function __construct() {
        $this->pdoQuery = new PDOQuery;
    }

    public function getEmail($email) {

        $pdo = array(
            ':email' => $email
        );

        return $this->pdoQuery->fetch('SELECT * FROM usuario WHERE email = :email', $pdo);

    }

    public function getUser($email, $password) {

        $pdo = array(
            ':email' => $email,
            ':password' => $password
        );

        return $this->pdoQuery->fetch('SELECT * FROM usuario WHERE email = :email AND password = :password', $pdo);

    }

    public function getInfosUser($id) {

        $pdo = array(
            ':id' => $id,
        );

        return $this->pdoQuery->fetch('SELECT name, lastName, email, password, imgProfile, dateCreate FROM usuario WHERE id = :id', $pdo);

    }

}