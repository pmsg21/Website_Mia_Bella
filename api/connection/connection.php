<?php
define('DBHOST','localhost:3306');
define('DBUSER','root');
define('DBPASS','reaxium');
define('DBNAME','mia_bella');
function _Connect()
{
    $connection = new mysqli(DBHOST, DBUSER, DBPASS, DBNAME);
    if($connection->connect_error)
    {
        echo "Fallo la conexión: " . $connection->connect_error;
    }
    return $connection;
}