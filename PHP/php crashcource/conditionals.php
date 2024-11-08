<?php


// < Less than
// > Greater than
// <= less than or equal to
// >= Greater than equal to
// == Equal to
// === Identical to
// != Not Equal to
// !== Not Identical


//IF STATEMENT

$age = 20;

if ($age >= 18){
    echo "You are old enough to vote" . "<br>";
}else{
    echo "Sorry, you are not old enough to vote" . "<br>";
}

// === Matches the Data Type while == does not match the Data Type
$numbers1 = 1;
$numbers2 = "1";

if ($numbers1 === $numbers2){
    echo "<h1>Hi Dear</h1>" . "<br>";
}else{
    echo "<h1>Does not match</h1>" . "<br>";
}

//Matches the current Time in hour and output the conditional value
// $t = date("F"); Months
// $t = date("h") || "H"; //hours

$t = date("h");
echo $t. "<br>";

if($t < 12){
    echo "Good Morning";
}elseif($t < 17){
    echo "Good Afternoon";
}
else{
    echo "Good Evening";
}

echo "<br>";

$posts = ["james", "Miracle", "Queen"];

if(empty($posts)){
    echo "<p>Post Array is Empty</p>";
}else{
    echo $posts[2];
}
echo "<br>";


//Tenary Operator is a single line IF STATEMENT
$firstPost = !empty($posts) ? $posts[0] : "No Item in the Array";
echo $firstPost;

echo "<br>";

//SWITCH STATEMENT
$favcolor = "red";

switch($favcolor){
    case "red";
    echo "Your Favourite color is Red";
    break;
    case "blue";
    echo "Your Favourite color is Red";
    break;
    case "green";
    echo "Your Favourite color is Red";
    break;
    default:
    echo "Your Favourite color is not red, green or blue";
}

?>
