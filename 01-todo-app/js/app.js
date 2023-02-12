'use strict';

// DOM ELEMENTS
const Input = document.querySelector('input');
const Button = document.querySelector('button');

const TodoList = document.querySelector('.todo-list');
const ClearTasks = document.querySelector('.clear-tasks');

// ADD LIST ITEM
const addTask = e => {
  e.preventDefault();
  const newListItem = document.createElement('li');
  const deleteListItem = document.createElement('button');

  deleteListItem.innerHTML = `<i class="fas fa-trash-alt"></i>`;

  if (Input.value !== '') {
    newListItem.textContent = Input.value;
    newListItem.appendChild(deleteListItem);
    TodoList.appendChild(newListItem);
    Input.value = '';
  } else {
    alert('Enter a task');
  }

  // DELETE LIST ITEM
  deleteListItem.addEventListener('click', function () {
    const del = confirm('Are you sure to delete this Item?');

    if (del === true) {
      const parentListItem = this.parentNode;
      parentListItem.remove();
    }
  });
};

Button.addEventListener('click', addTask);
ClearTasks.addEventListener('click', () => {
  TodoList.innerHTML = '';
});
