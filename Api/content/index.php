<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../vendor/autoload.php';
require '../connection/connection.php';

$app = new \Slim\App;

$app->get("/", function(Request $request, Response $response) 
{
    try
    {
        $db = Connect();
        $data = array();
        $result = $db->query("SELECT id_banner, index_banner, img_src, img_alt, caption_title, caption_description FROM banners");
        while($row = $result->fetch_assoc())
        {
            $sections = array('id_banner' => $row["id_banner"],
                              'index_banner' => $row["index_banner"],
                              'img_src' => $row["img_src"],
                              'img_alt' => $row["img_alt"],
                              'caption_title' => $row["caption_title"],
                              'caption_description' => $row["caption_description"]);
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

$app->get("/GetBanners", function(Request $request, Response $response) 
{
    try
    {
        $db = Connect();
        $data = array();
        $result = $db->query("SELECT id_banner, index_banner, img_src, img_alt, caption_title, caption_description FROM banners");
        while($row = $result->fetch_assoc())
        {
            $sections = array('id_banner' => $row["id_banner"],
                              'index_banner' => $row["index_banner"],
                              'img_src' => $row["img_src"],
                              'img_alt' => $row["img_alt"],
                              'caption_title' => $row["caption_title"],
                              'caption_description' => $row["caption_description"]);
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

$app->run();