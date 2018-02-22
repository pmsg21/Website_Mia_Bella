<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require 'vendor/autoload.php';
require 'connection/connection.php';
require 'helpers/ExceptionHelper.php';
require 'helpers/ResponseHelper.php';

//Se hace una instancia de la aplicación de Slim
$app = new \Slim\App;

//Se obtienen las secciones para la navegación de la página
$app->get("/GetSections", function(Request $request, Response $response)
{
    try
    {
        $db = Connect();
        $data = array();
        $result = $db->query("SELECT menu_id, section, redirectTo FROM menu");
        while($row = $result->fetch_assoc())
        {
            $sections = array('menu_id' => $row["menu_id"],
                              'section' => $row["section"],
                              'redirectTo' => $row["redirectTo"]);
            $section = array();
            $section = array_merge($sections, $section);
            array_push($data, $section);
        }
        $db->close();
        $finalResponse = GetResponse(true, null, $data);
    }
    catch(Exception $e)
    {
        $finalResponse = GetException($e);
    }
    $response->getBody()->write($finalResponse);
    return $response;
});

//Se corre la aplicación
$app->run();