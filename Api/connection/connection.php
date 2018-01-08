<?php
define('DBHOST','localhost');
define('DBUSER','adminMia');
define('DBPASS','admin12345Mia');
define('DBNAME','mia_bella');
function Connect()
{
    $connection = new mysqli(DBHOST, DBUSER, DBPASS, DBNAME);
    if($connection->connect_error)
    {
        echo "Fallo la conexión: " . $connection->connect_error;
    }
    return $connection;
}