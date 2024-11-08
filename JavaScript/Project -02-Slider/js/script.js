let slides = document.querySelectorAll(".slide");
let nextBtn = document.querySelector("#next");
let prevBtn = document.querySelector("#prev");

let num = 0;

//Next Function which controls the slide and next button

function next() {
  if (num > slides.length - 1) {
    num = 0;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[num].style.display = "block";
  }

  num++;
}

next();

//Whenever you click on next button it calls next function
nextBtn.addEventListener("click", next);

function Prev() {
  num--;

  if (num < 0) {
    num = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[num].style.display = "block";
  }
}

//Whenever you click on previous button it calls prev function
prevBtn.addEventListener("click", Prev);

//Calls Next Function Every 3 seconds when our website loads
window.addEventListener("load", function () {
  this.setInterval(next, 3000);
});
