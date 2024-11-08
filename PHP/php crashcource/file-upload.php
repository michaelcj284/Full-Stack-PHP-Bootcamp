<?php

//Check if the form is submitted
if(isset($_POST['submitbtn'])){

    //Check if the 'upload' file input is not empty
    if(!empty($_FILES['upload']['name'])){

        //Retrive the details
        $file_name = $_FILES['upload']['name'];
        $file_size = $_FILES['upload']['size'];
        $file_tmp = $_FILES['upload']['tmp_name'];

        // print_r($_FILES);
        //img23uu4.jpg; ['img23uu4', 'jpg']
        //get file extension using explode()function
        $file_ext = explode('.', $file_name); //splits the file name into an array usign '.' as a delimeter
        $file_ext = strtolower(end($file_ext));//gets the last element of the array, which is  the file extension

        //Validate file extension
        $allowed_extensions = ['png', 'jpg', 'jpeg'];

        if(in_array($file_ext, $allowed_extensions)){

            //Check if the file size is within the limit (1MB in this case)
            if($file_size <= 1000000){
                //Specify the terget directory for file upload
                $target_dir = 'uploads/'.$file_name; //'uploads/' is the directory, and $file_name is the name of the file

                //Move the upload file to the target directory
                move_uploaded_file($file_tmp, $target_dir);

                // Display success message
                echo $message = '<p style="color:green;"> File Uploaded</p>';
            }else{
                // Display error message if the file is too large
                echo $message = '<p style="color:red;">The file is too large</p>';
            }
        }else{
            // Displayy error message for invalid image type
            echo $message = '<p style="color:red"> File extension not allowed</p>';
        }
    }else{
        //Display error message if no file is chosen
        echo $message = '<p style="color:red">Please Choose a file</p>';
    }
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>File Upload</title>
</head>
<body>
    <form action="file-upload.php" method="post" enctype="multipart/form-data">

        <input type="file" name="upload"><br><br>

        <button type="submit" name="submitbtn">Submit</button>
    </form>
</body>
</html>