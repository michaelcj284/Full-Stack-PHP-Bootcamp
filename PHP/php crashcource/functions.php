<?php
//Functions in PHP

function Uyi(){

}
Uyi();

function miracle(){
	echo "Good Morning";
}
miracle();

function registerUser($email){
	echo $email . "User Registered";
}

registerUser("michaelcj284@gmail.com");

function sum($n1, $n2){
	echo $n1 + $n2;
}


sum(5, 6);


//Anonymous Function
$subtract = function ($x1, $x2) {
	return $x1 - $x2;
};

echo $subtract(7, 8);
