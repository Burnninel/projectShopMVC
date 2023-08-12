<?php 

class UserCrud {
    
    private $pdoCrud;

    public function __construct(){
        $this->pdoCrud = new PDOCrud();
    }

    public function createUser($name, $lastname, $email, $password, $dateCreate) {
    
        $pdo = array(
            ':name'       => $name,
            ':lastname'   => $lastname,
            ':email'      => $email,
            ':password'   => $password,
            ':dateCreate' => $dateCreate
        );

        $columns = 'name, lastname, email, password, dateCreate';
        $values = ':name, :lastname, :email, :password, :dateCreate';

        $result = $this->pdoCrud->insert('usuario', $columns, $values, $pdo);

        return $result ? true : false;
    }

}