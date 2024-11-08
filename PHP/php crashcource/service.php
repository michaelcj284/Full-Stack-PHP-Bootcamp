<?php

if(isset($_GET['age']) && isset($_GET['firstname'])){
    $age = htmlspecialchars($_GET['age']);
    $firstname = htmlspecialchars($_GET['firstname']);
}

echo $age. '<br>';
echo $firstname. '<br>';





?>