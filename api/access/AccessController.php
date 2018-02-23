<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../vendor/autoload.php';
require '../connection/connection.php';
require '../helpers/ExceptionHelper.php';
require '../helpers/ResponseHelper.php';
require '../helpers/UsersHelper.php';

$app = new \Slim\App;

// REGIÓN DE REGISTRO //
$app->post("/RegisterUser", function(Request $request, Response $response)
{
    try
    {
        $jsonObject = $request->getParams();
        $db = _Connect();
        $data = array();
        $encryptedPassword = password_hash($jsonObject["password"], PASSWORD_BCRYPT);
        if(UserExist($db, $jsonObject["username"]) > 0)
        {
            $finalResponse = _GetResponse(false, "This user already exist.", $data);
        }
        else
        {
            $db->query("INSERT INTO mia_bella.users(username, password, is_active, user_type_id)
                          VALUES('". $jsonObject["username"] ."', '" . $encryptedPassword ."', 1, " . $jsonObject["user_type_id"] .")");
            $result = $db->query("SELECT user_id FROM mia_bella.users order by user_id desc limit 1");
            while($row = $result->fetch_assoc())
            {
                $data = array('user_id' => $row["user_id"]);
            }
            $finalResponse = _GetResponse(true, null, $data);
        }
        $db->close();
    }
    catch (Exception $e)
    {
        $finalResponse = _GetException($e);
    }
    $response->getBody()->write($finalResponse);
    return $response;
});

$app->post("/RegisterUserDetails", function(Request $request, Response $response)
{
    try
    {
        $jsonObject = $request->getParams();
        $db = _Connect();
        $db->query("INSERT INTO mia_bella.user_details(user_id, first_name, last_name, email, sex, birthday, address)
                          VALUES(". $jsonObject["user_id"] .", '" . $jsonObject["first_name"] ."', '" . $jsonObject["last_name"] ."', '" . $jsonObject["email"] ."', '" . $jsonObject["sex"] ."', '" . $jsonObject["birthday"] ."', '" . $jsonObject["address"] ."')");
        $db->close();
        $finalResponse = _GetResponse(true, null, $jsonObject);
    }
    catch (Exception $e)
    {
        $finalResponse = _GetException($e);
    }
    $response->getBody()->write($finalResponse);
    return $response;
});
// FIN REGIÓN DE REGISTRO //

// LOGIN & LOGOUT //
$app->post("/Login", function(Request $request, Response $response)
{
    try
    {
        $jsonObject = $request->getParams();
        $db = _Connect();
        if(UserExist($db, $jsonObject["username"]) > 0)
        {
            if(CheckEncryptedPassword($db, $jsonObject["username"], $jsonObject["password"]))
            {
                //PHP7//$token = bin2hex(random_bytes(64));
                $token = bin2hex(openssl_random_pseudo_bytes(64));
                // Start the session
                session_start();
                // Set session variables
                $_SESSION["token"] = $token;
                $data = array("token" => $token);
                $finalResponse = _GetResponse(true, "Login Successful", $data);
            }
            else
            {
                $finalResponse = _GetResponse(false, "The password is incorrect.", $jsonObject);
            }
        }
        else
        {
            $finalResponse = _GetResponse(false, "This user doesn't exist in the system.", $jsonObject);
        }
        $db->close();
    }
    catch (Exception $e)
    {
        $finalResponse = _GetException($e);
    }
    $response->getBody()->write($finalResponse);
    return $response;
});

$app->get("/Logout", function(Request $request, Response $response)
{
    try
    {
        session_start();
        // remove all session variables
        session_unset();
        // destroy the session
        session_destroy();
        $finalResponse = _GetResponse(true, "Logout Successful", null);
    }
    catch (Exception $e)
    {
        $finalResponse = _GetException($e);
    }
    $response->getBody()->write($finalResponse);
    return $response;
});
// FIN DE LOGIN & LOGOUT //

// REGIÓN DE DETALLES DEL USUARIO//
$app->get("/GetUserDetails/{user_id}", function(Request $request, Response $response)
{
    try
    {
        $user_id = $request->getAttribute('user_id');
        $db = _Connect();
        $data = array();
        $result = $db->query("SELECT 	user_id,
                                            first_name,
                                            last_name,
                                            email,
                                            sex,
                                            birthday,
                                            address
                                    FROM mia_bella.user_details 
                                    WHERE user_id = $user_id");
        while($row = $result->fetch_assoc())
        {
            $data = array('user_id' => $row["user_id"],
                          'first_name' => $row["first_name"],
                          'last_name' => $row["last_name"],
                          'email' => $row["email"],
                          'sex' => $row["sex"],
                          'birthday' => $row["birthday"],
                          'address' => $row["address"]);
        }
        $db->close();
        if(count($data) > 0)
        {
            $finalResponse = _GetResponse(true, null, $data);
        }
        else
        {
            $finalResponse = _GetResponse(false, "This user doesn't exist.", $data);
        }
    }
    catch(Exception $e)
    {
        $finalResponse = _GetException($e);
    }
    $response->getBody()->write($finalResponse);
    return $response;
});

$app->put("/EditUserDetails/{user_id}", function(Request $request, Response $response)
{
    try
    {
        $user_id = $request->getAttribute('user_id');
        $jsonObject = $request->getParams();
        $db = _Connect();
        $db->query("UPDATE mia_bella.user_details
                          SET first_name = '" . $jsonObject["first_name"] ."',
                              last_name = '" . $jsonObject["last_name"] ."',
                              email = '" . $jsonObject["email"] ."',
                              sex = '" . $jsonObject["sex"] ."',
                              birthday = '" . $jsonObject["birthday"] ."',
                              address = '" . $jsonObject["address"] ."'
                          WHERE user_id = $user_id");
        $db->close();
        $finalResponse = _GetResponse(true, "User updated successfully", $jsonObject);
    }
    catch(Exception $e)
    {
        $finalResponse = _GetException($e);
    }
    $response->getBody()->write($finalResponse);
    return $response;
});

$app->put("/EditUserPassword/{user_id}", function(Request $request, Response $response)
{
    try
    {
        $user_id = $request->getAttribute('user_id');
        $jsonObject = $request->getParams();
        $db = _Connect();
        $encryptedPassword = password_hash($jsonObject["password"], PASSWORD_BCRYPT);
        $db->query("UPDATE mia_bella.users
                          SET password = '" . $encryptedPassword ."'
                          WHERE user_id = $user_id");
        $db->close();
        $finalResponse = _GetResponse(true, "Password updated successfully", $jsonObject);
    }
    catch(Exception $e)
    {
        $finalResponse = _GetException($e);
    }
    $response->getBody()->write($finalResponse);
    return $response;
});
// FIN DE REGIÓN DE DETALLES DEL USUARIO//

$app->run();