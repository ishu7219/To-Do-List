function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value;

    if (taskText.trim() !== "") {
        const taskList = document.getElementById("taskList");

        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <button onclick="removeTask(this)">Remove</button>
        `;

        taskList.appendChild(li);
        taskInput.value = "";
    }
}

function removeTask(button) {
    const taskList = document.getElementById("taskList");
    taskList.removeChild(button.parentElement);
}