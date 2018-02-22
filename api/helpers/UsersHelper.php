<?php
/**
 * Created by PhpStorm.
 * User: pablo_sierra
 * Date: 22/02/18
 * Time: 03:19 PM
 */

function UserExist($db, $username)
{
    $data = array();
    $result = $db->query("SELECT user_id FROM mia_bella.users WHERE username = '" . $username ."'");
    while($row = $result->fetch_assoc())
    {
        $data = array('user_id' => $row["user_id"]);
    }
    return count($data);
}

function CheckEncryptedPassword($db, $username, $password)
{
    $data = array();
    $result = $db->query("SELECT password FROM mia_bella.users where username = '" . $username ."'");
    while($row = $result->fetch_assoc())
    {
        $data = array('password' => $row["password"]);
    }
    $samePassword = password_verify($password, $data["password"]);
    return $samePassword;
}

function CheckTokenAvailability()
{

}