function startGame() {
    let userName = prompt("Hello! What's your name?");
    alert("Welcome to the Mind Game, " + userName + "!");
    playMindGame();
}

function playMindGame() {
    alert("Choose a number in your mind.");
    alert("Now, Double your number.");

    // Generate a random two-digit even number smaller than 30 for the user to add
    let randomNumber = generateRandomEvenNumber();
    
    alert("Add Mine " + randomNumber + " to your number.");

    // Calculate the result
    let userNumber = 10; // Assume user follows instructions and doubles their chosen number (any number can be used here)
    let calculationResult = (userNumber + randomNumber) / 2;
    
    alert("Now, Half the Result.");

    // Wait for the user to acknowledge before proceeding
    alert("Now, Take back your choosen number.");

    alert("You are left with:  " + randomNumber / 2 + " am i right ");
}

function generateRandomEvenNumber() {
    // Generate a random two-digit even number smaller than 30
    let randomEvenNumber = Math.floor(Math.random() * 15) * 2 + 2;
    return randomEvenNumber;
}
