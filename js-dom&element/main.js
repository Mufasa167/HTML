function checkAge() {
    // Get the user's age from the input field
    var age = parseInt(document.getElementById("ageInput").value);

    // Check if the age is above 18
    if (!isNaN(age) && age > 18) {
        document.getElementById("resultMessage").textContent = "You can drink.";
    } else if (!isNaN(age) && age < 18) {
        document.getElementById("resultMessage").textContent = "You're too young.";
    } else {
        document.getElementById("resultMessage").textContent = "Please enter a valid age.";
    }
}