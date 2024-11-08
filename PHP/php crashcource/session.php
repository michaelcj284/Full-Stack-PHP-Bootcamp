<?php

/*--------------- SESSION----------------*/

/*
Session are a way to store information (in variables) to be used across multiple pages. Unlike cookies, session are
stored on the server
*/

session_start();

if(isset($_POST['submitbtn'])){
    $username = htmlspecialchars($_POST['username']);
    $password = htmlspecialchars($_POST['password']);


    if($username === 'Miracle' && $password === "1234"){
        $_SESSION['username'] = $username;
        header('Location: admin/dashboard.php');
    }else{
        echo '<h1> Incorrect Login Details </h1>'; 
    }
}
?>

<form action="session.php" method="POST">
    <div>
        <label for="username">Username:</label>
        <input type="text" name="username" id="username">
    </div>
    <div>
        <label for="age">Password:</label>
        <input type="password" name="password">
    </div>
    <button type="submit" name="submitbtn">Submit</button>
</form>



