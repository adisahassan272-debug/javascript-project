// Get elements from HTML
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();

    // Check if input is empty
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new list item
    const li = document.createElement("li");

    // Create task text
    const span = document.createElement("span");
    span.textContent = taskText;

    // Mark task as completed
    span.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    // Delete task
    deleteBtn.addEventListener("click", function () {
        li.remove();
        updateCount();
    });

    // Add elements to list item
    li.appendChild(span);
    li.appendChild(deleteBtn);

    // Add task to the list
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";

    // Update task count
    updateCount();
}

// Function to update task count
function updateCount() {
    const totalTasks = taskList.children.length;

    taskCount.textContent = totalTasks + 
        (totalTasks === 1 ? " task" : " tasks");
}

// Add task when button is clicked
addBtn.addEventListener("click", addTask);

// Add task when Enter key is pressed
taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});