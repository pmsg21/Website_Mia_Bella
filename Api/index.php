<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require 'vendor/autoload.php';
require 'connection/connection.php';

$app = new \Slim\App;

$app->get("/", function(Request $request, Response $response) 
{
    
});

$app->get("/GetSections/", function(Request $request, Response $response) 
{
    try
    {
        $db = Connect();
        $data = array();
        $result = $db->query("SELECT id, section, redirectTo FROM menu");
        while($row = $result->fetch_assoc())
        {
            $sections = array('id' => $row["id"],
                              'section' => $row["section"],
                              'redirectTo' => $row["redirectTo"]);
            $section = array();
            $section = array_merge($sections, $section);
            array_push($data, $section);
        }
        $db->close();
        $response->write(json_encode($data));
        return $response;
    }
    catch(Exception $e)
    {
        $response->getBody()->write($e->getMessage());
        return $response;
    }
});

$app->get("/GetSections/{id}", function(Request $request, Response $response) 
{
    try
    {
        $id = $request->getAttribute('id');
        $db = Connect();
        $data = array();
        $result = $db->query("SELECT id, section, redirectTo FROM menu where id = $id");
        while($row = $result->fetch_assoc())
        {
            $sections = array('id' => $row["id"],
                              'section' => $row["section"],
                              'redirectTo' => $row["redirectTo"]);
            $section = array();
            $section = array_merge($sections, $section);
            array_push($data, $section);
        }
        $db->close();
        $response->getBody()->write(json_encode($data));
        return $response;
    }
    catch(Exception $e)
    {
        $response->getBody()->write($e->getMessage());
        return $response;
    }
});

$app->run();