let currentStep = 0;
let userNumber = null;
let randomNumber = null;
let userName = null;

function startGame() {
    currentStep = 0;
    userNumber = null;
    randomNumber = null;
    userName = null;
    userName = prompt("Hello! What's your Name?");
    if (userName) {
        let outputDiv = document.getElementById("gameOutput");
        outputDiv.innerHTML = "<p>Welcome to the Mind Game, " + userName + "!</p>";
        playMindGame();
        document.getElementById("startButton").style.display = "none";
    }
}

function playMindGame() {
    let outputDiv = document.getElementById("gameOutput");
    if (currentStep === 0) {
        outputDiv.innerHTML += "<p class='instruction'>Choose Any Number In Your Mind .</p>";
    } else if (currentStep === 1) {
        outputDiv.innerHTML += "<p class='instruction'>Now, Double Your Number .</p>";
    } else if (currentStep === 2) {
        randomNumber = generateRandomEvenNumber();
        outputDiv.innerHTML += "<p class='instruction'>Now Add my " + randomNumber + "  to Your Number.</p>";
    } else if (currentStep === 3) {
        userNumber = 10;
        let calculationResult = (userNumber + randomNumber) / 2;
        outputDiv.innerHTML += "<p class='instruction'>Now, Take Half of Final Number.</p>";
    } else if (currentStep === 4) {
        outputDiv.innerHTML += "<p class='instruction'>Take Back, Your Chosen Number.</p>";
    } else if (currentStep === 5) {
        outputDiv.innerHTML += "<p class='instruction'>And U left with : " + randomNumber / 2 + " am I Right??? </p>";
    }
    if (currentStep < 5) {
        document.getElementById("nextButton").style.display = "block";
    }

    if (currentStep === 5) {
        document.getElementById("startButton").style.display = "block";
        document.getElementById("nextButton").style.display = "none";
    }
}

function nextStep() {
    let outputDiv = document.getElementById("gameOutput");
    outputDiv.innerHTML = "";
    currentStep++;
    playMindGame();
}

function generateRandomEvenNumber() {
    let randomEvenNumber = Math.floor(Math.random() * 15) * 2 + 2;
    return randomEvenNumber;
}

document.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        nextStep();
    }
});
