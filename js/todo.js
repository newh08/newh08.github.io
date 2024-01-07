const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOLISTS_KEY = "todoLists";
const CROSS_LINE_CSS = "line-through";

let toDoLists = [];

function paintToDo(newTodo) {
    const li = document.createElement("li");

    const updateButton = createUpdateButton();
    const span = createSpanWithTodo(newTodo.text);
    const removeButton = createRemoveButton();

    li.appendChild(updateButton);
    li.appendChild(span);
    li.appendChild(removeButton);

    li.id = newTodo.id;
    
    toDoList.appendChild(li);
}

function createUpdateButton() {
    const updateButton = document.createElement("input");
    updateButton.type = "checkbox";
    updateButton.addEventListener("click", updateTodoList);
    return updateButton;
}

function createSpanWithTodo(newTodo) {
    const span = document.createElement("span");
    span.innerText = newTodo;
    return span;
}

function createRemoveButton() {
    const removeButton = document.createElement("button");
    removeButton.innerText = "❌"
    removeButton.addEventListener("click", removeTodoList);
    return removeButton;
}

function updateTodoList(event) {
    const parentLi = event.target.parentElement;
    
    if (parentLi.style.textDecorationLine === CROSS_LINE_CSS) {
        parentLi.style.textDecorationLine = "";
    } else {
        parentLi.style.textDecorationLine = CROSS_LINE_CSS; 
    }
}

function removeTodoList(event) {
    const parentLi = event.target.parentElement;
    parentLi.remove();

    for(var i = 0; i < toDoLists.length; i++){ 
        if (toDoLists[i].id === parseInt(parentLi.id)) { 
            toDoLists.splice(i, 1); 
          i--; 
        }
      }
    saveToDoLists();

}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDoLists.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDoLists();
}

function saveToDoLists() {
    localStorage.setItem(TODOLISTS_KEY, JSON.stringify(toDoLists));
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOLISTS_KEY);

if(savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    toDoLists = parsedTodos;
    parsedTodos.forEach(item => paintToDo(item));
}