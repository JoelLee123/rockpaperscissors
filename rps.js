export function getComputerChoice() {
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

export function playRound(humanChoice, computerChoice) {
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