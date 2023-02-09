<?php

class Post{
    private $conn;
    private $table = 'info';

    public $id;
    public $name;
    public $country_code;
    public $number;
    public $email;
    public $location;

    public function __construct($conn){
        $this->conn = $conn;
    }

    public function read(){
        $query = "SELECT
        id, name, country_code, number, email, location FROM .$this->table .'info' ";

        $stmt = $this->conn->prepare($query);
        $stmt->execute();

        return $stmt;
    }
}