// Confirm before deleting a task
function confirmDelete() {
    return confirm("Are you sure you want to delete this task?");
}

// Display a message when the page loads
document.addEventListener("DOMContentLoaded", function () {

    console.log("Student Task Manager loaded successfully.");

    // Automatically hide success message after 3 seconds
    const message = document.querySelector(".success");

    if (message) {
        setTimeout(function () {
            message.style.display = "none";
        }, 3000);
    }

});
