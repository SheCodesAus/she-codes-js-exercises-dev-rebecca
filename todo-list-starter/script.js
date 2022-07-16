let toDosText = ["Walk Chilli", "Make dinner"]
let toDoList = document.getElementById("new-task-text")

function addTask() {
  forEach((item => {
    let newListItem = createElement("li")
    toDoList.appendChild(item)
  }))
  console.log(toDoList)
}

function updateTodoList() {}

function createNewTodoItemElement(todoItem, index) {}

function toggleComplete(index) {}