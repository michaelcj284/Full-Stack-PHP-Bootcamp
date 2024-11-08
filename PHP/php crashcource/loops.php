<?php


// //For Loop

// for (initializer; condition; increment){
//     //code to be Executed
// }

// 
//Example of For Loop

$students = ['Queen', 'Miracle', 'James', 'JohnPaul'];

for ($i = 0; $i < count($students); $i++) {
    echo "<h1>" . $students[$i] . '<h1>';
}
echo "<br>";

$i = 0;
"Queen";
$i = 1;
"Miracle";
$i = 2;
"James";
$i = 3;
"JohnPaul";


//While Loop


// while (condition) {
//     //code to be executed
// }

$animals = ['Lion', 'Elephant', 'Goat', 'Dog'];

$i = 0;
while ($i < count($animals)) {
    echo '<h1>' . $animals[$i] . "<h1>";

    $i++;
}
echo '<br>';

//Do While Loop


// do{
//     //code to be executed
// }while (condition);

// Do..while loop will always execute the block once, even if the condition is false


$fruits = ['Orange', 'Apple', 'WaterMelon', 'Banana'];

$z = 0;
do {
    echo '<h2>' . $fruits[$z] . '</h2>';
    $z++;
} while ($z < count($fruits));


//ForEach

$posts = ['first post', 'second post', 'third post'];

foreach ($posts as $value) {
    echo '<p>' . $value . '<p>'.'<br>';
}

//Using ForEach to loop through Associative Array

$person = [
    'first_name' => 'Chidozie',
    'last_name' => 'Iwuanyanwu',
    'email' => 'michaelcj284@gmail.com',
];

foreach ($person as $value) {
    echo $value . '<br>';
}


$work = [
    [
        'number' => '1',
        'firstname' => 'Micheal',
        'lastname' => 'Anyanwu',
        'position' => 'Instructor',
        'Firm' => 'WebCapz'
    ],
    [
        'number' => '2',
        'firstname' => 'Laganja',
        'lastname' => 'Abiola',
        'position' => 'Student',
        'Firm' => 'WebCapz'
    ],
    [
        'number' => '3',
        'firstname' => 'Onome',
        'lastname' => 'Aaron',
        'position' => 'Student',
        'Firm' => 'WebCapz'
    ],
];
echo $work[2]['Firm'];

foreach ($work as $value) {
    foreach ($value as $row) {
        echo "<h4>" . $row . "</h4>";
    }
}
