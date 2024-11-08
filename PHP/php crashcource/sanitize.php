<form action="sanitize.php">
    <label for="">First Name</label><br>
    <input type="text" name="firstnamez"><br><br>

    <label for="">Last Name</label><br>
    <input type="text" name="lastname"><br><br>

    <label for="">Email</label><br>
    <input type="email" name="email"><br><br>

    <label for="">Age</label><br>
    <input type="text" name="age"><br><br>

    <button type="submit" name="registerbtn">Register</button>
     
</form>

<?php
if(isset($_POST['registerbtn'])){
    $firstname = filter_input(INPUT_POST, 'firstnamez');
    $lastname = filter_input(INPUT_POST, 'lastname');
    $email = filter_input(INPUT_POST, 'email');
    $age = filter_input(INPUT_POST, 'age');
        // OR
    $firstname = htmlspecialchars($_POST['firstname']);
    $lastname = htmlspecialchars($_POST['lastname']);
    $email = htmlspecialchars($_POST['email']);
    $age = htmlspecialchars($_POST['age']);
}

?>