//DOM Document Object Model

// Selectors in JavaScript

// document.querySeclector(".hi");
// document.getElementById("wrapper");
// document.querySelectorAll(".box1");
// document.getElementsByClassName("box1");
// document.getElementsByTagName();

//New

let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");

box1.addEventListener("click", function () {
  box2.style.marginLeft = "30%";
  box3.style.marginLeft = "30%";
});

box2.addEventListener("click", function () {
  box2.style.backgroundColor = "yellow";
});

box3.addEventListener("click", function () {
  box3.innerHTML = "DOM";
});
