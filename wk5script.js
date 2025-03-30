// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    
    // Get elements
    const textButton = document.getElementById("textButton");
    const toggleButton = document.getElementById("toggleButton");
    const description = document.getElementById("description");
    const box = document.getElementById("box");

    // Change text content dynamically
    textButton.addEventListener("click", function () {
        description.textContent = "The text has been changed!";
    });

    // Toggle the visibility of the div
    toggleButton.addEventListener("click", function () {
        box.classList.toggle("hidden");
    });
});
