document.getElementById('taskInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <span class="task-text">${taskText}</span>
        <div class="buttons">
            <button class="edit" onclick="editTask(this)">Edit</button>
            <button class="complete" onclick="completeTask(this)">Complete</button>
            <button class="delete" onclick="deleteTask(this)">Delete</button>
        </div>
    `;

    document.getElementById('tasksList').appendChild(taskItem);
    taskInput.value = "";
}

function editTask(button) {
    const taskItem = button.closest('li');
    const taskText = taskItem.querySelector('.task-text').textContent;
    const newTaskText = prompt("Edit your task:", taskText);
    if (newTaskText !== null) {
        taskItem.querySelector('.task-text').textContent = newTaskText;
    }
}

function completeTask(button) {
    const taskItem = button.closest('li');
    taskItem.classList.add('completed');
    taskItem.querySelector('.complete').remove();
    taskItem.querySelector('.edit').remove();
    document.getElementById('completedTasksList').appendChild(taskItem);
}

function deleteTask(button) {
    const taskItem = button.closest('li');
    taskItem.remove();
}

function toggleCompletedTasks() {
    const completedTasksList = document.getElementById('completedTasksList');
    completedTasksList.classList.toggle('hidden');
}

// Show or hide warning message based on screen width
window.addEventListener('resize', function() {
    const warningMessage = document.getElementById('warningMessage');
    if (window.innerWidth < 400) {
        warningMessage.classList.remove('hidden');
    } else {
        warningMessage.classList.add('hidden');
    }
});