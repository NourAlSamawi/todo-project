document.addEventListener('DOMContentLoaded', function () {
    var userName = prompt("Enter your name:");

    var userGender = prompt("Enter your gender (male or female):").toLowerCase();

    if (userGender !== 'male' && userGender !== 'female') {
        alert("Invalid gender input. Welcoming message will be displayed without title.");
    }

    var userAge = prompt("Enter your age:");

    if (userAge <= 0) {
        alert("Invalid age. Age must be greater than zero.");
    }

    var title = userGender === 'male' ? 'Mr' : (userGender === 'female' ? 'Ms' : '');
    alert("Welcome, " + (title ? title + " " : "") + userName + "!");


});
