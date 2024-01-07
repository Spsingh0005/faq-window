"use strict";

const plusButton = document.querySelectorAll(".plus");
const minusButton = document.querySelectorAll(".minus");
const firstMinusButton = document.querySelector("#min");

// fetching plus buttons
const buttons = document.querySelectorAll(".buttons");
plusButton.forEach(function (plus) {
  plus.addEventListener("click", function () {
    const content = this.parentElement.parentElement.nextElementSibling;
    content.style.display = "block";
    const siblingDiv = this.nextElementSibling;
    siblingDiv.style.display = "block";
    // hide plus button
    this.style.display = "none";
  });
});
// Fetching minus buttons
minusButton.forEach(function (minus) {
  minus.style.display = "none";
  minus.addEventListener("click", function () {
    const content = this.parentElement.parentElement.nextElementSibling;
    content.style.display = "none";
    const siblingDiv = this.previousElementSibling;
    siblingDiv.style.display = "block";
    this.style.display = "none";
  });
});
firstMinusButton.style.display = "block";
