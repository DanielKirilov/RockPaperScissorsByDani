const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";
let playerTurn;
let computerTurn

if (playerTurn === "r" || playerTurn === rock) {
    playerTurn = rock;
} else if (playerTurn === "p" || playerTurn === paper) {
    playerTurn = paper;
} else if (playerTurn === "s" || playerTurn === scissors) {
    playerTurn = scissors;
} else {
    console.log("Invalid input. Try again!");
}
let pcRandomNumber = Math.floor(Math.random() * 3) + 1;

switch(pcRandomNumber) {
    case 1: computerTurn = "rock"; break;
    case 2: computerTurn = "paper"; break;
    case 3: computerTurn = "scissors"; break;
} 