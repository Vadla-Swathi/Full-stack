//DOMcontentLoaded -> It is an event, which refers to the completion of DOM loading in the browser
// add_task_button - snake case notation
// addTaskButton - camel case

document.addEventListener('DOMContentLoaded',()=>{
    const addTaskButton =document.getElementById('add-task-button');
    const newTaskInput =document.getElementById('new-task');
    const taskList =document.getElementById('task-list');

    addTaskButton.addEventListener('click', addTask);
    // IIFE -> immediately invoked function expression
    newTaskInput.addEventListener('keypress',(event)=>{
        if(event.key === "Enter"){
            addTask();
        }  
    });
    function addTask(){
        const taskText = newTaskInput.value.trim();
        if(taskText != ' '){
            const listElement = document.createElement('li');
            listElement.textContent = taskText;

            const completeButton = document.createElement('button');
            completeButton.textContent = 'Complete';
            completeButton.addEventListener('click', ()=>{
                listElement.classList.toggle('completed');
                console.log(listElement);
            })


            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete');

            deleteButton.addEventListener('click', ()=>{
                listElement.remove();
            })

            listElement.appendChild(completeButton);
            listElement.appendChild(deleteButton);

            taskList.appendChild(listElement);
            newTaskInput.value="";
        }
    }
})