<?php
/**
 * Created by PhpStorm.
 * User: pablo_sierra
 * Date: 12/02/18
 * Time: 10:58 AM
 */
function _GetException(Exception $e)
{
    $exceptionResponse = array( "success" => false,
                                "message" => $e->getMessage(),
                                "data" => null);
    return $exceptionResponse;
}