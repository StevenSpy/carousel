"use strict";

const nextButton = document.querySelector(".next");
const previousButton = document.querySelector(".previous");
const li = document.querySelectorAll("li");
let i = 0;

function nextSlide() {
  li[i].classList.remove("on");
  i++;
  if (i >= document.li.length) {
    i = 0;
  }
  li[i].classList.add("on");
}

function previousSlide() {
  li[i].classList.remove("on");
  i--;
  if (i < 0) {
    i = li.length - 1;
  }
  li[i].classList.add("on");
}

function nextSlideArrow(event) {
  if (event.code == 39) {
    nextSlide();
  }

  else (event.code == 37){
      previousSlide();
  }
}

nextButton.addEventListener("click", nextSlide);
previousButton.addEventListener("click", previousSlide);
document.addEventListener("keyup", nextSlideArrow);
