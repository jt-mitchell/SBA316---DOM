//caches using getElementByID - creates message in HTML file.
const top6mess = document.getElementById("top6");
top6mess.textContent = "My Top Chessplayers:";

document.querySelector("body").style.backgroundColor = "green";

//Todo List
const inputTask = document.querySelector("#input");
const listTask = document.querySelector("#listTask");
console.log(document.querySelector("inputTask"));

//Create new tasks
let btn = document.querySelector("button");

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
li.addEventListener("click", completeTask);

//Task removal

function deleteTask(event) {
  const task = event.target.parentElement;
  listTask.removeChild(task);
}

// const delBtn = document.createElement("button");
// delBtn.textContent = "Delete";
// li.appendChild(delBtn);
// delBtn.addEventListener("click", deleteTask);

// Counts the number of clicks
let count = 0;
let button = document.querySelector(".counter");
let countDisplay = document.querySelector(".display");

button.addEventListener("onclick", function () {
  count++;
  countDisplay.innerHTML = count;
});
