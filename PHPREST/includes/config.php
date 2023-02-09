<?php
$servername = "localhost";
$dbname = "Information";
$username = "root";
$password = "";

    $conn = new PDO("mysql:host=$servername;dbname=Information", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION,);
    $conn->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
    $conn->setAttribute(PDO::MYSQL_ATTR_USE_BUFFERED_QUERY, true);

echo "Connected successfully";