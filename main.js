//Date and Time on webpage.

function upDateTime() {
  const now = new Date();

  const currentDate = now.toLocaleString();

  document.querySelector("#datetime").textContent = currentDate;
}

setInterval(upDateTime, 1000);

//caches using getElementByID - creates message in HTML file.

const top6mess = document.getElementById("top6");
top6mess.textContent = "My Top Chessplayers:";

document.querySelector("body").style.backgroundColor = "green";

// Array that will poplulate <li> </li> in index.html

let chessMaster = [
  "Magnus Carlsen",
  "Gary Kasparov",
  "Bobby Fischer",
  "Mikhail Botvinnik",
  "Anatoly Karpov",
  "Vishy Anand",
  "David Bronstein",
  "Mikhail Tal",
  "Capablanca, Jose Raoul",
];

//Loop to populate <ul></ul> with <li></li> items.

let list = document.querySelector("#list1");
for (let i = 0; i < chessMaster.length; i++) {
  // const element = chessMaster[i];
  let li = document.createElement("li");
  li.textContent = chessMaster[i];
  list.appendChild(li);
}

//Todo List
const inputTask = document.querySelector("#input");
const listTask = document.querySelector("#listTask");
console.log(document.querySelector("inputTask"));

//Create new tasks
const btn = document.querySelector("button");
const bop = document.querySelector("#bop");

function newTask() {
  const taskText = inputTask.value;
  if (taskText !== "") {
    const li = document.createElement("li");
    li.textContent = taskText;
    listTask.appendChild(li);
    inputTask.value = "";
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";

    li.appendChild(delBtn);
    delBtn.addEventListener("click", deleteTask);
    delBtn.style.margin = "20 px";
  }
}
btn.addEventListener("click", newTask);
// Task completion
function completeTask(event) {
  const task = event.target;
  task.classlist.toggle("completed");
}
const li = li.addEventListener("click", completeTask);

//Task removal

function deleteTask(event) {
  const task = event.target.parentElement;
  listTask.removeChild(task);
}

//Changes text when button is clicked.

function changeIt() {
  const changeMe = document.getElementById("myText");
  changeMe.textContent = "Life is beautiful!";
}

//Changes color of button when moused over

// bop.addEventListener("mouseover", function () {
//   bop.classList.add("hover");
// });
// bop.addEventListener("mouseout", function () {
//   bop.classList.remove("hover");
// });
// const delBtn = document.createElement("button");
// delBtn.textContent = "Delete";
// li.appendChild(delBtn);
// delBtn.addEventListener("click", deleteTask);

// Counts the number of clicks
// let count = 0;
// let button = document.querySelector(".counter");
// let countDisplay = document.querySelector(".display");

// button.addEventListener("onclick", function () {
//   count++;
//   countDisplay.innerHTML = count;
// });
