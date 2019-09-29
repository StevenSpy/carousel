"use strict";

const nextButton = document.querySelector(".next");
const previousButton = document.querySelector(".previous");
const pics = document.querySelectorAll("li");
let i = 0;

function nextSlide() {
  pics[i].classList.remove("on");
  i++;
  if (i >= pics.length) {
    i = 0;
  }
  pics[i].classList.add("on");
}

function previousSlide() {
  pics[i].classList.remove("on");
  i--;
  if (i < 0) {
    i = pics.length - 1;
  }
  pics[i].classList.add("on");
}

function nextSlideArrow(event) {
  if (event.code == 39) {
    nextSlide();
  }

  if (event.code == 37) {
    previousSlide();
  }
}

nextButton.addEventListener("click", nextSlide);
previousButton.addEventListener("click", previousSlide);
document.addEventListener("keyup", nextSlideArrow);
