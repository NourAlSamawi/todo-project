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
    var likesProgramming;
    do {
        likesProgramming = prompt("Do you like programming? (yes/no)").toLowerCase();
        if (likesProgramming !== 'yes' && likesProgramming !== 'no') {
            alert("Invalid input. Please enter 'yes' or 'no'.");
        }
    } while (likesProgramming !== 'yes' && likesProgramming !== 'no');
    userAnswers.push(likesProgramming);

    var hasPets;
    do {
        hasPets = prompt("Do you have any pets? (yes/no)").toLowerCase();
        if (hasPets !== 'yes' && hasPets !== 'no') {
            alert("Invalid input. Please enter 'yes' or 'no'.");
        }
    } while (hasPets !== 'yes' && hasPets !== 'no');
    userAnswers.push(hasPets);

    var enjoysReading;
    do {
        enjoysReading = prompt("Do you enjoy reading books? (yes/no)").toLowerCase();
        if (enjoysReading !== 'yes' && enjoysReading !== 'no') {
            alert("Invalid input. Please enter 'yes' or 'no'.");
        }
    } while (enjoysReading !== 'yes' && enjoysReading !== 'no');
    userAnswers.push(enjoysReading);

    console.log("User Answers:", userAnswers);
});
