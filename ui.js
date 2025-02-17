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
const roundLabel = document.querySelector('#roundLabel');
roundLabel.textContent = `Round ${currentRound} of ${maxRounds}`;

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
    console.log(currentRound);

    if (currentRound > maxRounds) {
        displayWinner();
        //Game finished - disable buttons
        btnRock.disabled = true;
        btnPaper.disabled = true;
        btnScissors.disabled = true;
        return; //Prevents round 6 of 5 from displaying
    }

    roundLabel.textContent = `Round ${currentRound} of ${maxRounds}`
}

function displayWinner() {
    if (humanScore > computerScore) {
        winnerLabel.textContent = "GAME OVER: Human wins!";
    } else if (computerScore > humanScore) {
        winnerLabel.textContent = "GAME OVER: Computer wins!";
    } else {
        winnerLabel.textContent = "GAME OVER: It's a tie!";
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
    roundLabel.textContent = `Round ${currentRound} of ${maxRounds}`;

    btnRock.disabled = false;
    btnPaper.disabled = false;
    btnScissors.disabled = false;
}

