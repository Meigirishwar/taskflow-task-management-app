let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    document.getElementById("taskCount").innerText =
    `Total Tasks: ${tasks.length}`;

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <div>
                <strong style="
                    text-decoration:${task.completed ? "line-through" : "none"};
                    color:${task.completed ? "green" : "black"};
                ">
                    ${task.text}
                </strong>
                <br>
                Priority: ${task.priority}
                <br>
                Due Date: ${task.dueDate}
            </div>

            <div>
                <button onclick="completeTask(${index})">Done</button>
                <button onclick="editTask(${index})">Edit</button>
                <button onclick="deleteTask(${index})">Delete</button>
            </div>
        `;

        taskList.appendChild(li);
    });
}

function addTask() {
    const input = document.getElementById("taskInput");
    const priority = document.getElementById("priority").value;
    const dueDate = document.getElementById("dueDate").value;

    if (input.value.trim() === "") {
        alert("Enter a task");
        return;
    }

    tasks.push({
        text: input.value,
        priority: priority,
        dueDate: dueDate,
        completed: false
    });

    saveTasks();
    renderTasks();

    input.value = "";
}

function deleteTask(index) {

    if(confirm("Are you sure you want to delete this task?")){

        tasks.splice(index, 1);

        saveTasks();

        renderTasks();
    }
}
function completeTask(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
}

function editTask(index) {
    const newTask = prompt("Edit Task", tasks[index].text);

    if (newTask !== null && newTask.trim() !== "") {
        tasks[index].text = newTask;
        saveTasks();
        renderTasks();
    }
}

renderTasks();