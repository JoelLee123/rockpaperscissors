//This file is specific for UI updates

import { getComputerChoice, playRound } from "./rps.js";

let humanScore = 0;
let computerScore = 0;

//Keep track of rounds - can only start game when button is clicked
let currentRound = 1;
let maxRounds = 5;

//Labels - update scores, show winner
const humanLabel = document.querySelector('#humanLabel');
const computerLabel = document.querySelector('#computerLabel');
const winnerLabel = document.querySelector('#winnerLabel');

//Buttons - can only play game if buttons are clicked
const btnRock = document.querySelector('#btnRock');
const btnPaper = document.querySelector('#btnPaper');
const btnScissors = document.querySelector('#btnScissors');
const btnReset = document.querySelector('#btnReset');

//Event listeners for buttons
btnRock.addEventListener('click', () => playGame("rock"));
btnPaper.addEventListener('click', () => playGame("paper"));
btnScissors.addEventListener('click', () => playGame("scissors"));
btnReset.addEventListener('click', resetGame);

function playGame(humanChoice) {
    console.log(humanChoice);

    if (currentRound > maxRounds) return;

    let computerChoice = getComputerChoice();
    let result = playRound(humanChoice, computerChoice);
    
    incrementScore(result);

    winnerLabel.textContent = result;

    //Move to next round
    currentRound++;

    if (currentRound > maxRounds) {
        winnerLabel.textContent = "Game over! Final scores: Human - " + humanScore + ", Computer - " + computerScore;
        //Game finished - disable buttons
        btnRock.disabled = true;
        btnPaper.disabled = true;
        btnScissors.disabled = true;
    }
}



function incrementScore(winner) { 
    if (winner === "Human wins!") {
        humanScore++;
        humanLabel.textContent = humanScore;
    } else if (winner === "Computer wins!") {
        computerScore++;
        computerLabel.textContent = computerScore;
    } else {
        //Do nothing - tie
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    currentRound = 1;

    humanLabel.textContent = 0;
    computerLabel.textContent = 0;
    winnerLabel.textContent = "";

    btnRock.disabled = false;
    btnPaper.disabled = false;
    btnScissors.disabled = false;
}

