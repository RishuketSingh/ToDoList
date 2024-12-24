const todoInput = document.getElementById('todoInput');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');

addButton.addEventListener('click', () => {
  if (todoInput.value === '') return;

  const li = document.createElement('li');
  li.innerHTML = `
    <input type="checkbox">
    ${todoInput.value}
    <button>Delete</button>
  `;

  todoList.appendChild(li);
  todoInput.value = '';

  li.querySelector('button').addEventListener('click', () => {
    li.remove();
  });
});