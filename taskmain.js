const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    return;
  }

  const li = document.createElement("li");
  li.innerText = taskText;
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });
  taskList.appendChild(li);
  taskInput.value = "";
}

addButton.addEventListener("click", addTask);
taskInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});