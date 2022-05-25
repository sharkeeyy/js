const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');

todoForm.addEventListener('submit', formHandler);

function formHandler(event) {
    event.preventDefault();
    
    // todoList.insertAdjacentHTML('beforeend', `<li>${todoInput.value}</li>`);

    const newTask = document.createElement('li');
    newTask.innerText = todoInput.value;

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'х';
    deleteBtn.setAttribute('role', 'button');
    deleteBtn.style['margin-left'] = '15px';
    newTask.append(deleteBtn);

    deleteBtn.addEventListener('click', function () {
        this.closest('li').remove();
    });

    todoList.append(newTask);

    todoInput.value = '';
    todoInput.focus();
}
