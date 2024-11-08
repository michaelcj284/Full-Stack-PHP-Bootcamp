<?php

//WORKING WITH STRING FUNCTION IN PHP

$string = "Hello World";

echo "<br/ >";
echo "<br/ >";

//Get the length of a String
echo strlen($string);

echo "<br/ >";

//Find the position of the first occurence of a substring in a string
echo strpos($string, "o");

echo "<br/ >";

//Find the position of the last occurence of a substring in a string
echo strrpos($string, "o");

echo "<br/ >";

//Reverse a string
echo strrev($string);

echo "<br/ >";

//Convert all characters to lowercase
echo strtolower($string);

echo "<br/ >";

//Convert all character to uppercase
echo strtoupper($string);

echo "<br/ >";

//Uppercase the first character of each word
echo ucwords($string);

echo "<br/ >";

//String replace
echo str_replace("World", "Guys", $string);

echo "<br/ >";

//Return portion of a string specified by offset and lenght
$words = "My name is Micheal. I'm from Rivers State. i'm currently learning Full-Stack Web Development";
$reduceWord = substr($words, 0, 38);
echo $reduceWord."...";

echo "<br/ >";

//Starts with
if (str_starts_with($string, 'He')){
    echo "YES";
}else{
    echo "NO";
}

echo "<br/ >";
//Ends with
if(str_ends_with($string, 'ld')){
    echo "YES";
}
?>