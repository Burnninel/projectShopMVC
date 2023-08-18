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

    public function addAddress($cep, $street, $number, $neighborhood, $city, $uf, $usuario_id) {
    
        $pdo = array(
            ':cep'          => $cep,
            ':street'       => $street,
            ':number'       => $number,
            ':neighborhood' => $neighborhood,
            ':city'         => $city,
            ':uf'           => $uf,
            ':usuario_id'   => $usuario_id
        );

        $columns = 'cep, street, number, neighborhood, city, uf, usuario_id';
        $values = ':cep, :street, :number, :neighborhood, :city, :uf, :usuario_id';

        $result = $this->pdoCrud->insert('address', $columns, $values, $pdo);

        return $result ? true : false;
    }

    public function addCard($numberCard, $month, $year, $cvv, $name, $cpf, $nick, $usuario_id) {
    
        $pdo = array(
            ':numberCard'          => $numberCard,
            ':month'       => $month,
            ':year'       => $year,
            ':cvv' => $cvv,
            ':name'         => $name,
            ':cpf'           => $cpf,
            ':nick'           => $nick,
            ':usuario_id'   => $usuario_id
        );

        $columns = 'numberCard, month, year, cvv, name, cpf, nick, usuario_id';
        $values = ':numberCard, :month, :year, :cvv, :name, :cpf, :nick, :usuario_id';

        $result = $this->pdoCrud->insert('card', $columns, $values, $pdo);

        return $result ? true : false;
    }

}