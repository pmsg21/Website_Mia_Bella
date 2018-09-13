<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../vendor/autoload.php';
require '../connection/connection.php';
require '../helpers/ExceptionHelper.php';
require '../helpers/ResponseHelper.php';

$app = new \Slim\App;

$app->get("/GetBanners", function(Request $request, Response $response)
{
    try
    {
        $db = _Connect();
        $data = array();
        $result = $db->query("SELECT 	banner.index_banner,
                                            banner.caption_title, 
                                            banner.caption_description, 
                                            image.img_src, 
                                            image.img_alt 
                                    FROM mia_bella.banners banner 
                                    INNER JOIN mia_bella.images image on banner.img_id = image.img_id 
                                    ORDER BY banner.index_banner");
        while($row = $result->fetch_assoc())
        {
            $banners = array('index_banner' => $row["index_banner"],
                              'img_src' => $row["img_src"],
                              'img_alt' => $row["img_alt"],
                              'caption_title' => $row["caption_title"],
                              'caption_description' => $row["caption_description"]);
            $banner = array();
            $banner = array_merge($banners, $banner);
            array_push($data, $banner);
        }
        $db->close();
        $finalResponse = _GetResponse(true, null, $data);
    }
    catch(Exception $e)
    {
        $finalResponse = _GetException($e);
    }
    $response->getBody()->write($finalResponse);
    return $response;
});

$app->run();