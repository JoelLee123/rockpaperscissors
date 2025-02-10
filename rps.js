function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Please enter your choice: rock, paper or scissors");
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            return "Computer wins!";
        } else {
            return "Human wins!";
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            return "Computer wins!";
        } else {
            return "Human wins!";
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            return "Computer wins!";
        } else {
            return "Human wins!";
        }
    } else {
        return "Invalid choice!";
    }
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        const result = playRound(humanSelection, computerSelection);
        console.log(result);

        console.log(`Human chose ${humanSelection}`);
        console.log(`Computer chose ${computerSelection}`);

        switch (result) {
            case "Human wins!":
                humanScore++;
                break;
            case "Computer wins!":
                computerScore++;
                break;
        }
    }

    if (humanScore === computerScore) {
        console.log("It's a tie!");
    }

    (humanScore > computerScore) ? console.log("Human wins the game") : console.log("Computer wins the game");
    console.log("HUMAN SCORE: " + humanScore);
    console.log("COMPUTER SCORE: " + computerScore);
}

playGame();