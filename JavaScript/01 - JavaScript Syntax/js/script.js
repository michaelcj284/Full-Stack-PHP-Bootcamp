//this is used to alert message to user when my website loads
window.alert("I really love PIZZA");

//this is a single line comment

/*
    This
    is
    a
    multiline
    comment
*/

/* ------------------------VARIABLES IN JAVASCRIPT -------------- */

/*

    A variable is a container used for storing single data.

    Two Steps in naming a veriable in JavaScript:

    1. Declaration (var, let, const);
    2. Assignment (= assignment operator)

    Strings, Numbers, Boolean, Null, undefined

*/

let myname = "miracle";
let firstname = "Chidozie"; //strings Datatype
var age = 21; // integer datatype
var count = 22.1; //Float datatype
let ages = "21"; //String datatype
let student = false; //Boolean datatype
let k = null; //Null datatype
let country; //undefined datatype

console.log(myname);
console.log(firstname);
console.log(age);

age = age + 1;
ages = ages + 1;

console.log(age);
console.log(ages);

console.log("Hello", firstname);
console.log("You are", age, "years old");
console.log("Enrolled:", student);

/*---------------- ARITHMETICS IN JAVASCRIPT ---------*/

/*
    It is a combination of ...
    operands (values, variables, etc)
    operators (+ - * / %)
    that can be evaluated to a value 
    ex: y = x + 5;

*/

let students = 30;

let math1 = students + 1;
let math2 = students - 1;
let math3 = students * 2;
let math4 = students / 3;
let extraStudents = students % 4;

console.log(math1);
console.log(math2);
console.log(math3);
console.log(math4);
console.log(extraStudents);

students += 1; //means "students = students + 1"
students -= 1; //means "students = students - 1"
students *= 2; //means "students = students * 2"
students /= 2; //means "students = students / 2"

// console.log(students);
//console.log(extraStudents);

/*---------- CONCATENATION IN JAVASCRIPT ----------*/

/*
    Concatenation is a way or method of adding or joining two or more 
    variables together in JavaScript.
*/

const firstnamez = "chidozie";
const agez = 40;
const paragraph =
  "My name is " + firstnamez + " and I am " + agez + " years old";
console.log(paragraph);

// Template String
console.log(`My name ${firstnamez} and I am ${agez} years old`);

const hello = `My name ${firstnamez} and I am ${agez} years old`;

console.log(hello);

/* -------- STRING FUNCTIONS IN JAVASCRIPT -------*/

let stringLetter = "Hello world";

console.log(stringLetter);

console.log(stringLetter.length);

console.log(stringLetter.toUpperCase());

console.log(stringLetter.toLowerCase());

console.log(stringLetter.substring(0, 7).toUpperCase());

/*------------ ARRAYS ------------*/
/*
Arrays are variables that hold multiple values

*/

new Array();
[];

const numbers = new Array(1, 2, 3, 4, 5, 6);

const multipleDatatype = ["hello", "banna", 2, false];

console.log(numbers);

const fruits = ["apple", "orange", "grape", "banna"];

fruits[4] = "pear"; //const fruits = ['apple', 'orange', 'grape', 'banana', 'pear'];

fruits.push("mango"); //const fruits = ['apple', 'orange', 'grape', 'banana', 'pear', 'mangos'];

fruits.unshift("strawberry"); //const fruits = ['strawberry', 'apple', 'orange', 'grape', 'banana', 'pear', 'mangos'];

fruits.pop(); //const fruits = ['apple', 'orange', 'grape', 'banana', 'pear'];

console.log(fruits);

//Arrays are zero based
console.log(fruits);

//CLASSWORK

const animals = ["kangaroo", "Antelop", "Mongoose", "Ostritch", "Gorilla"];

/*

/
    Questions

    1. Output the second index of the array on your console.
    2. Add 'Lion' to the beginning of the array.
    3. Add 'Zebra' to the ending of the array.
    4. Output the values of animals array on your console.

*/

console.log(animals[1]);
animals.unshift("Lion");
animals.push("Zebra");
console.log(animals);

//OBJECTS

const person = {
  firstName: "John",
  lastName: "Doe",
  Age: 30,

  hobbies: ["music", "movies", "sports"],

  address: {
    street: "50 main st",
    city: "Boston",
    state: "MA",
  },
};

//DESTRUCTURING, is the pulling of variables or values from an object. example

const {
  firstName,
  lastName,
  address: { state, city },
} = person;

console.log(lastName);

//How to access or get variables in an object in JavaScript
console.log(person.firstName, person.lastName);

//How to access or get value of array in an object in JavaScript
console.log(person.hobbies[1]);

//How to access or get value of object in an object in JavaScript
console.log(person.address.city);

person.email = "michaelcj284@gmial.com";

console.log(person);

//Arrays of object
const NavBarList = [
  {
    id: "1",
    name: "Home",
  },
  {
    id: "2",
    name: "About",
  },
  {
    id: "3",
    name: "Service",
  },
  {
    id: "4",
    name: "Contact Us",
  },
];

console.log(NavBarList[2]);

//LOOPS IN JAVASCRIPT

/*
  For Loop, it takes 3 parameters; first is the initializer, second is the condition to be met, third is the increment
*/

const basket = ["mango", "apple", "orange", "grape"];

for (let m = 0; m <= 3; m++) {
  console.log(basket[m]);
}

//CLASSWORK

//Use for loop to output the value of Array i.e wildAnimals in your console

let wildAnimals = ["lion", "tiger", "python", "wolve", "leopard"];

for (let i = 0; i < wildAnimals.length; i++) {
  console.log(wildAnimals[i]);
}

// let evenz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let e = 0; e <= evenz.length; e++) {
//   if (evenz[e] % 2 != 0) {
//     console.log(evenz[e]);
//   }
// }

//While loop (old school)
let i = 0;
while (i < wildAnimals.length) {
  console.log(wildAnimals[i]);
  i++;
}

const todoss = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Meeting with boss",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Dentist Appointment",
    isCompleted: false,
  },
];

//For of loop in JAVASCRIPT

for (let todo of todoss) {
  console.log(todo.text);
}

//ForEach, Map, Filter in JAVASCRIPT

todoss.forEach(function (todo) {
  console.log(todo.id);
});

//Map
const todoText = todoss.map(function (todo) {
  return todo.text;
});
console.log(todoText);

//Filter
const todoCompleted = todoss
  .filter(function (todo) {
    return todo.isCompleted === true;
  })
  .map(function (todo) {
    return todo.text;
  });

console.log(todoCompleted);

const schoolz = [
  {
    id: 1,
    name: "Victory",
    feePaid: true,
  },
  {
    id: 2,
    name: "Vincent",
    feePaid: false,
  },
  {
    id: 3,
    name: "Dara",
    feePaid: true,
  },
  {
    id: 4,
    name: "Martins",
    feePaid: false,
  },
];

const feePayment = schoolz
  .filter(function (school) {
    return school.feePaid === true;
  })
  .map(function (school) {
    return school.name;
  });

console.log(feePayment);






//If Statement in JAVASCRIPT

const ipAddress_Nigeria = 112324;
const ipAddress_USA = 223445;

if (ipAddress_USA === ipAddress_Nigeria) {
  console.log("welcome to our website");
} else {
  console.log("does not support your country");
}

const x = 20;

if (x === 10) {
  console.log("x is 10");
} else if (x > 10) {
  console.log("x is greater than 10");
} else {
  console.log("x is less than 10");
}

const y = 4;
const z = 10;

if (y > 5 || z > 9) {
  console.log("y is more than 5 or z is more than 10");
}

if (y > 5 && z > 9) {
  console.log("y is more than 5 or z is more than 10");
}

//Class work
/* Write a program to print "Free Upgrade" if member salary is greater than 
70,000 or age is equal to or greater than 45 else "No Upgrade"
 */



const salary1 = 60000;
const age2 = 44;

if (salary1 > 70000 || age2 >= 45) {
  console.log("Free Upgrade");
} else {
  console.log("No Upgrade");
}


let pi = 3.14;
let r = 24;
let r_squre = r ** 2;

let area = pi * r_squre;

console.log(area);



/*Write a code to output "Qualified" if CGPA is greater than 4.5 
and gender is equal to female else "Disqualified"*/

const cgpa = 4.5;
const gender = "female";

if (cgpa > 4.5 && gender === "female") {
  console.log("Qualified");
} else {
  console.log("Disqualified");
}

//tenary operators,  is like a shorthand IF statement, it is used alot to assign variable based on condition
const agesGrade = 17;

const output = agesGrade >= 18 ? "red" : "blue";
console.log(output);

let CarColor = "blue";

//SWITCH
switch (CarColor) {
  case "red":
    console.log("color is red");
    break;

  case "blue":
    console.log("color is blue");
    break;

  default:
    console.log("color is NOT red or blue");
}

//FUNCTIONS

//Normal Function
function OutPutHello() {
  console.log("Hello");
}
OutPutHello();



//How to write Arrow Function
const OutPutName = () => {
  console.log("Olamide");
};
OutPutName();

function shalom(a = 6, b = 3, c = 4) {
  let sumTotal = a + b + c;
  console.log(sumTotal);
}
shalom();

//A function that adds two numbers
function addNums(num1, num2) {
  console.log(num1 + num2);
  
}

addNums(5, 6);

function operate(a, b) {
  console.log(a + b);
  console.log(a - b);
  console.log(a * b);
  console.log(a / b);
}

operate(15, 3);

//Scope and Environment

/*The scope defines the part of the program where a variable or a 
function is visible/accessible

The variables defined outside all the functions and blocks are
available throughout the code. These are called Global Variables*/

/*The variables defined inside the functions or blocks are local 
variables and are only available in that function or block of code.
These variables are called Local Variables*/

var numz1 = 10; //num1 is a Global Variable

console.log(numz1);


function sum(numz2) {
  var total = numz1 + numz2; //total is a Local Variable
  console.log(numz1); //Local Scope of num1
  console.log(total);
}


// console.log(total);

console.log(numz1); //Global Scope of num1

sum(20);
// sum(50);




//Hoisting in JavaScript

/*This mechanism where varibles and function can be used
before declaring them is called Hoisting in JavaScript*/

console.log(num3); //output: undefined

num3 = 10;
console.log(num3);
var num3;

str1 = "Demo String";
console.log(str1);
var str1;

//Code Execution

/*The variables and function declarations are moved to the top
of their scope before code execution.

JavaScript has two steps in executing a particular script.
Step-1: Creation
Step-2: Execution*/

//Function Hoisting

sum(5, 10);
sum(30, 22);

function sum(num4, num5) {
  console.log(num4 + num5);
}

sum(90, 8);

//Class Work: What will be the output of total in the code below?

var total = 10;
var sum = function sum(num4, num5) {
  console.log(total);
  total = num4 + num5;
  var total
  console.log(total)
}

sum(90, 8)

//Introduction to Document Object Model (DOM)

/*When a web page is loaded, the browser creates a Document
Object Model of the page. It is the tree representation of the 
HTML docuement. This DOm tree can be modified with the 
help of JavaScript*/

//JavaScript and DOM

/*JavaScript can add new HTML elements and attribute.
JavaScript can change any HTML elements and attribute in the page
JavaScript can change all the CSS styles in the page
JavaScript can remove existing HTML elements and attributes
JavaScript can add and listen to HTML events like onClick, onScroll etc. */
