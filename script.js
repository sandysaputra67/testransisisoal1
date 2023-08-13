document.addEventListener("DOMContentLoaded", function () {
    const taskItems = document.querySelectorAll(".task-item");
    const tagElements = document.querySelectorAll(".tag");
    const searchInput = document.getElementById("searchInput");
  
    // Add event listener to task items
    taskItems.forEach((item) => {
      item.addEventListener("change", function () {
        const parentTask = this.closest(".task");
        const tag = parentTask.querySelector(".tag");
  
        if (this.checked) {
          tag.classList.add("completed");
        } else {
          tag.classList.remove("completed");
        }
      });
    });
    const tasks = [
      { name: "Task 1", description: "Description of Task 1" },
      { name: "Task 2", description: "Description of Task 2" },
      { name: "Task 3", description: "Description of Task 3" },
      // Add more tasks as needed
    ];
    function renderTaskCards(tasks) {
      taskContainer.innerHTML = "";
      tasks.forEach(task => {
        const taskCard = document.createElement("div");
        taskCard.classList.add("task-card");
        taskCard.innerHTML = `
          <h3>${task.name}</h3>
          <p>${task.description}</p>
        `;
        taskContainer.appendChild(taskCard);
      });
    }
  
    // Initial rendering of task cards
    renderTaskCards(tasks);
  
    // Search input event listener
    searchInput.addEventListener("input", () => {
      const searchTerm = searchInput.value.toLowerCase();
      const filteredTasks = tasks.filter(task =>
        task.name.toLowerCase().includes(searchTerm) ||
        task.description.toLowerCase().includes(searchTerm)
      );
      renderTaskCards(filteredTasks);
    });
    // Example: Toggle visibility of category tasks
    const categoryLabels = document.querySelectorAll(".category");
    categoryLabels.forEach((label) => {
      label.addEventListener("click", function () {
        const category = this.textContent.toLowerCase();
        const tasksWrapper = document.querySelector(".tasks-wrapper");
  
        const allTasks = tasksWrapper.querySelectorAll(".task");
        allTasks.forEach((task) => {
          if (category === "all" || task.classList.contains(category)) {
            task.style.display = "block";
          } else {
            task.style.display = "none";
          }
        });
      });
    });
  });
  