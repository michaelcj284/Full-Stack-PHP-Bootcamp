<?php

$fruits = ["apple", "orange", "pear", "pineapple"];

//Get the Length of an Array or to count the numbers of items in array
echo count($fruits);
echo "<br>";

//Search items in array
if(in_array("apple", $fruits)){
    echo "Item exist in the Fruit Array";
}else{
    echo "Item does not exist in the Fruit Array";
}
echo "<br>";


$fruits[] = "grape"; //Manual Way to add new item to an Array
array_push($fruits, "blueberry", "strawberry");
array_unshift($fruits, "Mango");

print_r($fruits);
echo "<br>";

//To Concatenate or add two or more arrays together

$arr1 = [1,2,3,7];
$arr2 = [4,5,6,9];

//Using Speed Operator to add two or more arrays together
$arr4 = [...$arr1, ...$arr2];

$arr3 = array_merge($arr1, $arr2);

print_r($arr4);


?>