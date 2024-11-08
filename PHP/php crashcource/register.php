<?php

if(isset($_POST['submitbtn'])){
    $firstname = htmlspecialchars($_POST['firstnamez']);
    $age = htmlspecialchars($_POST['age']);

    echo $firstname;
    echo '<br>';
    echo $age;
}



?>