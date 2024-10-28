// Toggle Ingredients Visibility
document.getElementById("toggleIngredients").addEventListener("click", function() {
    var ingredientsSection = document.getElementById("ingredients");
    if (ingredientsSection.classList.contains("hidden")) {
        ingredientsSection.classList.remove("hidden");
        this.textContent = "Hide Ingredients";
    } else {
        ingredientsSection.classList.add("hidden");
        this.textContent = "Show Ingredients";
    }
});

// Toggle Each Step in Instructions
var toggleButtons = document.querySelectorAll(".toggleStep");
toggleButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        var step = this.nextElementSibling;
        if (step.classList.contains("hidden")) {
            step.classList.remove("hidden");
            this.textContent = "Hide Step";
        } else {
            step.classList.add("hidden");
            this.textContent = "Show Step";
        }
    });
});
