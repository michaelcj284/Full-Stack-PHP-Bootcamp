<?php

session_start();

if(isset($_SESSION['username'])){
    $username = $_SESSION['username'];
    echo '<h2>Welcome '.$username.'</h2>';

    echo "<br>";

    echo '<a href="logout.php">Logout</a>';
}

?>