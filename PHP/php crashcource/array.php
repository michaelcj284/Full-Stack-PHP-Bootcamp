<?php

//ARRAY
//Array are containers or variables that hold multiple datatype

//There are two ways you can declare an array in PHP
//1. [],
//2. Array()

//Example
$laptops = [];
$fruits = array();

$items = ["car", 1, NULL, 2.3, TRUE, "Mango"];

echo $items[0];
echo "<br>";

//Types of Array in PHP
//1. Associative Arrays
$students = [
    "name1" => "Chidozie Augustine",
    "name2" => "Onome Aaron",
    "name3" => "Laganja Yemi",
];

echo $students["name2"];

//2. Multi-Dimensional Arrays
$work = [
    [
        "Number" => "1",
        "firstname" => "Chidozie",
        "lastname" => "Augustine",
        "Position" => "Instructor",
        "Firm" => "WebCapz",
    ],
    [
        "Number" => "2",
        "firstname" => "Onome",
        "lastname" => "Aaron",
        "Position" => "Student",
        "Firm" => "WebCapz",
    ],
    [
        "Number" => "3",
        "firstname" => "Lagenja",
        "lastname" => "Abiola",
        "Position" => "Student",
        "Firm" => "WebCapz",
    ],
];

echo "<br>";
echo "<br>";
echo $work[1]["firstname"];


?>