"use strict";

const nextButton = document.querySelector(".next");
const previousButton = document.querySelector(".previous");
const li = document.querySelectorAll("li");
let i = 0;

function nextSlide() {}

function previousSlide() {}

function nextSlideArrow() {}

nextButton.addEventListener("click", nextSlide);
previousButton.addEventListener("click", previousSlide);
document.addEventListener("keyup", nextSlideArrow);
