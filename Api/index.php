<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require 'vendor/autoload.php';
require 'connection.php';

$app = new \Slim\App;

$app->get("/", function(Request $request, Response $response) 
{
    $response->write("Welcome to Slim!!!");
    return $response;
});

$app->get("/GetNavSections", function(Request $request, Response $response) 
{
    try
    {
        $db = GetDB();
        $query = $db->prepare("SELECT * FROM menu");
        $query->execute();
        $result = $query->fetchAll(PDO::FETCH_ASSOC);
        if($result)
        {
            $response = $response->withJson($result);    
            $db = null;
        }
        $response->write();
    }
    catch(PDOException $e)
    {
        $response->write("{'success':false, 'message': " . $e->getMessage() . "}");
    }
    return $response;
});

// $app->get('/hello/{name}', function(Request $request, Response $response) 
// {
//     $name = $request->getAttribute('name');
//     $response->getBody()->write("Hello, $name");

//     return $response;
// });
$app->run();