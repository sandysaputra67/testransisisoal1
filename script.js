document.addEventListener("DOMContentLoaded", function () {
    const taskItems = document.querySelectorAll(".task-item");
    const tagElements = document.querySelectorAll(".tag");
  
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
  