<?php
/**
 * Created by PhpStorm.
 * User: pablo_sierra
 * Date: 12/02/18
 * Time: 12:43 PM
 */
function _GetResponse($success, $message, array $data)
{
    $response = array(  "success" => $success,
                        "message" => $message,
                        "data" => $data);
    return json_encode($response);
}