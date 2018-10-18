<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../vendor/autoload.php';
require '../connection/connection.php';
require '../helpers/ExceptionHelper.php';
require '../helpers/ResponseHelper.php';

$app = new \Slim\App;

$app->get("/GetProducts/", function(Request $request, Response $response)
{
    try
    {
        $db = _Connect();
        $data = array();
        $result = $db->query("SELECT 	product.product_id,
                                            product.product_name,
                                            product.product_type_id, 
                                            image.img_src, 
                                            image.img_alt 
                                    FROM mia_bella.products product 
                                    INNER JOIN mia_bella.images image on product.img_id = image.img_id");
        while($row = $result->fetch_assoc())
        {
            $products = array(  'product_id' => $row["product_id"],
                                'product_name' => $row["product_name"],
                                'product_type_id' => $row["product_type_id"],
                                'img_src' => $row["img_src"],
                                'img_alt' => $row["img_alt"]);
            $product = array();
            $product = array_merge($products, $product);
            array_push($data, $product);
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

$app->get("/GetProducts/{product_id}", function(Request $request, Response $response)
{
    try
    {
        $product_id = $request->getAttribute('product_id');
        $db = _Connect();
        $data = array();
        $result = $db->query("SELECT 	detail.product_id,
                                            product.product_name,
                                            product.product_type_id,
                                            detail.product_description,
                                            detail.product_price,
                                            image.img_src,
                                            image.img_alt
                                    FROM mia_bella.product_detail detail
                                    INNER JOIN mia_bella.products product on product.product_id = detail.product_id
                                    INNER JOIN mia_bella.images image on image.img_id = product.img_id
                                    WHERE detail.product_id = $product_id");
        while($row = $result->fetch_assoc())
        {
            $data = array(  'product_id' => $row["product_id"],
                            'product_type_id' => $row["product_type_id"],
                            'product_name' => $row["product_name"],
                            'product_description' => $row["product_description"],
                            'product_price' => floatval($row["product_price"]),
                            'img_src' => $row["img_src"],
                            'img_alt' => $row["img_alt"]);
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