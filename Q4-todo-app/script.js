// Grap the elements from the DOM
const titleInput = document.querySelector("#title");
const descriptionInput = document.querySelector("#description");
const dateInput = document.querySelector("#date");
const addBtn = document.querySelector("#add");
const todoList = document.querySelector(".todo-list");
const deleteAllBtn = document.querySelector("#delete-all");

// An array to store the todos as objects
const todos = [];

// Listen for the click event on the add button
addBtn.addEventListener("click", function () {
  // Get the todo values from the inputs
  const title = titleInput.value;
  const description = descriptionInput.value;
  const date = dateInput.value;

  // Create a todo object and add it to the todos array
  const todo = {
    title: title,
    description: description,
    date: date,
  };
  todos.push(todo);

  // Clear the inputs
  titleInput.value = "";
  descriptionInput.value = "";
  dateInput.value = "";

  // Update the the todo list
  displayTodos();
});

function displayTodos() {
  todoList.innerHTML = "";

  // Loop through the todos array and display each todo
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];

    const todoItem = document.createElement("div");
    todoItem.classList.add("todo");

    const title = document.createElement("h3");
    title.innerText = todo.title;

    const description = document.createElement("p");
    description.innerText = todo.description;

    const date = document.createElement("p");
    date.innerText = todo.date;

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    deleteBtn.innerText = "Delete";

    // Listen for the click event on the delete button and delete the todo
    deleteBtn.addEventListener("click", function () {
      todos.splice(i, 1);
      displayTodos();
    });

    // Append the elements to the todo item
    todoItem.append(title, description, date, deleteBtn);
    todoList.append(todoItem);
  }
}

// Listen for the click event on the delete all button and delete all todos
deleteAllBtn.addEventListener("click", function () {
  todos.splice(0, todos.length);
  displayTodos();
});
