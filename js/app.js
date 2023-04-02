"use strict";

const item = document.getElementById("text-input");
const addTask = document.getElementById("add-item");
const clearAll = document.getElementById("clear-all");
//const checkBox = document.getElementById("checkbox");
const list = document.querySelector(".task-list");

const createTaskItem = function() {
    const li = document.createElement('li');
    const div = document.createElement('div');
    const input = document.createElement('input');
    const innerDiv = document.createElement('div');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');

    li.classList.add('item');
    div.classList.add('check');
    input.type = 'checkbox';
    input.classList.add('status');
    input.classList.add('checkbox');
    innerDiv.classList.add('text');

    h3.innerText = 'Learning some Vanilla JS.';
    p.innerText = 'Thursday, 05:22 AM';

    li.appendChild(div);
    div.appendChild(input);
    innerDiv.appendChild(h3).appendChild(p);
    div.appendChild(innerDiv);

    list.appendChild(li);
}

addTask.addEventListener('click', createTaskItem);

clearAll.addEventListener('click', () => {
    list.innerHTML = '';
})
