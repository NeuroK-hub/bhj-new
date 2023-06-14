const taskInput = document.getElementById('task__input');
const tasksAdd = document.getElementById('tasks__add');
const taskList = document.getElementById('tasks__list');

let addTask = () => {
    taskList.insertAdjacentHTML('afterbegin', `
        <div class="task">
            <div class="task__title">
                ${taskInput.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>`
        )
        taskInput.value = '';     
};

taskList.addEventListener("click", e => {
    if (e.target.classList.contains("task__remove")) {
      e.target.parentElement.remove();
    }
});

let tasksAddButton = () => {tasksAdd.addEventListener('click', e => {
    e.preventDefault();
    if (taskInput.value.trim().length > 0) {
        addTask() 
    }
  })
};

tasksAddButton();