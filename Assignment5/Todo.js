function addTask() {
    let taskInput = document.getElementById('new-task').value;
    if (taskInput === '') {
        alert("Please enter a task");
        return;
    }
    let taskList = document.getElementById('task-list');
    let li = document.createElement('li');
    li.textContent = taskInput;
    taskList.appendChild(li);
    document.getElementById('new-task').value = '';
}