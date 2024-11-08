<?php


if (isset($_GET["firstname"]) && isset($_GET["lastname"])  && isset($_GET["age"]) && isset($_GET["email"])){
    $firstname = htmlspecialchars($_GET["firstname"]);
    $lastname = htmlspecialchars($_GET["lastname"]);
    $age = htmlspecialchars($_GET["age"]);
    $email = htmlspecialchars($_GET["email"]);

    $fullname = $firstname ." ". $lastname;
    echo $fullname;
    echo "<br>";
    echo $age;
    echo "<br>";
    echo $email;
}
?>