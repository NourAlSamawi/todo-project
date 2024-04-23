

document.addEventListener('DOMContentLoaded', function () {
    var userAnswers = [];
  
    function askYesNoQuestion(question) {
      var answer;
      do {
        answer = prompt(question + " (yes/no)").toLowerCase();
        if (answer !== 'yes' && answer !== 'no') {
          alert("Invalid input. Please enter 'yes' or 'no'.");
        }
      } while (answer !== 'yes' && answer !== 'no');
      return answer;
    }
  
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
  
    // Use the function for Yes/No questions
    userAnswers.push(askYesNoQuestion("Do you like programming?"));
    userAnswers.push(askYesNoQuestion("Do you have any pets?"));
    userAnswers.push(askYesNoQuestion("Do you enjoy reading books?"));
  
    console.log("User Answers:");
    // Print each element of the userAnswers array
    for (var i = 0; i < userAnswers.length; i++) {
      console.log(userAnswers[i]);
    }
  });
  