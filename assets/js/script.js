var formEl = document.querySelector("#task-form");
var taskToDoEl = document.querySelector("#tasks-to-do");


var createTaskHandler = function(event){
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name = 'task-name']").value;
    var taskTypeInput = document.querySelector("select [name = 'task-type']").value;

    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    }
  createTaskEl(taskDataObj);

if (!taskNameInput || !taskTypeInput){
    alert("you need to fill out the task form!");
    return false;
}
};


var createTaskEl = function(taskDataObj){
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    taskInfoEl.innerHTML = "<h3 class = 'task-name'>" + taskNameInput + "</h3><span class = 'task-type'>"+ taskDataObj.type + "</span>";
    listItemEl.appendChild(taskInfoEl);
    listItemEl.textContent = taskNameInput;
    taskToDoEl.appendChild(listItemEl);


};

formEl.addEventListener("submit",createTaskHandler);





