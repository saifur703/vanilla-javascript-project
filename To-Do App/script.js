/**
 * Title: To Do Application using Vanilla JS with DOM
 * Description: This File has all the JS function necessary to to control the 'To Do Application' 
 * Author: Saifur Rahman
 * Date: 13 April, 2021
 */


// Select Element
let newTask = document.querySelector("#new-task");
let form = document.querySelector("form")
let todoUl = document.querySelector("#items")
let completeUl = document.querySelector(".complete-task ul")

// Functions
let createTask = function (task) {
    let listItem = document.createElement("li");
    listItem.className = "item"
    let checkBox = document.createElement("input");
    let label = document.createElement("label")

    label.innerText = task;
    checkBox.type = "checkbox";

    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;
}

let addTask = function (event) {
    event.preventDefault();
    let listItem = createTask(newTask.value);

    todoUl.appendChild(listItem);

    newTask.value = "";

    // Bind the new list item to the incomplete list
    bindIncompleteItems(listItem, completeTask);
    
}

let completeTask = function () {
    let listItem = this.parentNode;
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete";

    listItem.appendChild(deleteBtn);

    let checkBox = listItem.querySelector("input[type='checkbox']");
    checkBox.remove();

    completeUl.appendChild(listItem);

    bindCompleteItems(listItem, deleteTask);
}

let deleteTask = function () {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;

    ul.removeChild(listItem);
}

let bindIncompleteItems = function (taskItem, checkBoxClick) {
    let checkBox = taskItem.querySelector('input[type="checkbox"]'); 
    checkBox.onchange = checkBoxClick
}

let bindCompleteItems = function (taskItem, deleteBtnClick) {
    let deleteBtn = taskItem.querySelector('.delete'); 
    deleteBtn.onclick = deleteBtnClick;
}

let toDoLength = todoUl.children.length;
for (let i = 0; i < toDoLength; i++) {
    bindIncompleteItems(todoUl.children[i], completeTask);
}

let CompleteLength = completeUl.children.length;
for (let i = 0; i < CompleteLength; i++) {
    bindCompleteItems(completeUl.children[i], deleteTask);
}

form.addEventListener("submit", addTask);