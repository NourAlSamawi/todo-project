document.addEventListener('DOMContentLoaded', function () {
    var userAnswers = [];

    var userName = prompt("Enter your name:");

    if (!userName.trim()) {
        alert("Invalid name. Please enter a valid name.");
        return;
    }
    userAnswers.push(userName);

    var userGender = prompt("Enter your gender (male or female):").toLowerCase();

    if (userGender !== 'male' && userGender !== 'female') {
        alert("Invalid gender input. Welcoming message will be displayed without title.");
    }
    userAnswers.push(userGender);

    var userAge = prompt("Enter your age:");

    if (userAge <= 0 || isNaN(userAge)) {
        alert("Invalid age. Age must be a valid positive number.");
        return;
    }
    userAnswers.push(userAge);

    var title = userGender === 'male' ? 'Mr' : (userGender === 'female' ? 'Ms' : '');
    alert("Welcome, " + (title ? title + " " : "") + userName + "!");

    var likesProgramming = confirm("Do you like programming?");
    var hasPets = confirm("Do you have any pets?");
    var enjoysReading = confirm("Do you enjoy reading books?");

    userAnswers.push(likesProgramming);
    userAnswers.push(hasPets);
    userAnswers.push(enjoysReading);

    console.log("User Answers:", userAnswers);
});
