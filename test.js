let count = 0;
let btn = document.querySelector(".counter");
let countDisplay = document.querySelector(".display");

btn.addEventListener("onclick", function () {
  count++;
  countDisplay.innerHTML = count;
});

let button = document.querySelector(".myButton");

button.addEventListener("mouseover", function () {
  this.style.backgroundColor = "blue";
});
button.addEventListener("mouseout", function () {
  this.style.backgroundColor = "white";
});
