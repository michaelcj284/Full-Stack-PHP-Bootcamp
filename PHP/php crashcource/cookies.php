<?php

/*----------------------Cookies-----------------*/

/*
     Cookies are mechanism for strong data in the remote browser and thus tracking or identifying return users. you can set specific data to be stored in the browser, and then retrive it when the user visits the site again.
*/

setcookie('firstname', 'Chido', time() + 86400 * 30);
setcookie('age', '30', time() + 86400 * 30);

if(isset($_COOKIE['firstname']) && isset($_COOKIE['age'])){

    $firstname = $_COOKIE['firstname'];
    $age = $_COOKIE['age'];

    echo $firstname;
    echo '<br>';
    echo $age;
}

?>