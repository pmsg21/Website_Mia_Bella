<?php
define('DBHOST','localhost');
define('DBUSER','adminMia');
define('DBPASS','admin12345Mia');
define('DBNAME','mia_bella');
function GetDB()
{
    $dbhost = "localhost";
    $dbname = "mia_bella";
    $dbuser = "adminMia";
    $dbpass = "admin12345Mia";
    $connect = new PDO('mysql:host=' . DBHOST . ';port=80;dbname=' . DBNAME, DBUSER, DBPASS);;
    $connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $connect;
}