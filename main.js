//caches using getElementByID - creates message in HTML file.
const top6mess = document.getElementById("top6");
top6mess.textContent = "My Top Chessplayers:";

document.querySelector("body").style.backgroundColor = "green";

//Todo List
const inputTask = document.querySelector("#input");
const listTask = document.querySelector("#tasklist");

//Create new tasks
function newTask() {
  const taskText = inputTask.value.trim();
  if (taskText !== " ") {
    const li = document.createElement("li");
    li.textContent = taskText;
    listTask.appendChild(li);
    inputTask.value = " ";
  }
}
// Task completion
function completTask(event) {
  const task = event.target;
  task.classlist.toggle("completed");
}
li.addEventListener("click", completeTask);

//Task removal

function deleteTask(event) {
  const task = event.target.ParentElement;
  listTask.removeChild(task);
}
const delBtn = document.createElement("button");
delBtn.textContent = "Delete";
delBtn.addEventListener("click", deleteTask);
li.appendChild(delBtn);
