<?php

/*------------------$_GET & $_POST SUPERGLOBALS------------*/

/* 
    WE CAN PASS DATA THROUGH URLS AND FORM USING THE $_GET AND $_POST SUPERGLOBALS
*/

?>

<!-- Using GET METHOD-->

<a href="service.php?firstname=Chidozie&age=20">Service</a><br><br>


<!--Using POST METHOD-->
<form action="register.php" method="POST">
    <div>
        <label for="name">Name</label>
        <input type="text" name="firstnamez">
    </div>
    <div>
        <label for="age">Age</label>
        <input type="text" name="age">
    </div>
    <button type="submit" name="submitbtn">Submit</button>
</form>