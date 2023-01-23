const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

let computerTurn;
let pcRandomNumber = Math.floor(Math.random() * 3) + 1;
let playerTurn = paper;

if (playerTurn === "r" || playerTurn === rock) {
    playerTurn = rock;
} else if (playerTurn === "p" || playerTurn === paper) {
    playerTurn = paper;
} else if (playerTurn === "s" || playerTurn === scissors) {
    playerTurn = scissors;
} else {
    console.log("Invalid input. Try again!");
}

switch (pcRandomNumber) {
    case 1: computerTurn = rock; break;
    case 2: computerTurn = paper; break;
    case 3: computerTurn = scissors; break;
}
        if ((playerTurn === rock || playerTurn === "r") && computerTurn === rock) {
            console.log("You chose Rock");
            console.log("The PC chose Rock");
            console.log("It's a Draw");
            
        } if ((playerTurn === rock || playerTurn === "r") && computerTurn === paper) {
            console.log("You chose Rock");
            console.log("The PC chose Paper");
            console.log("You Lose");
            
        } if ((playerTurn === rock || playerTurn === "r") && computerTurn === scissors) {
            console.log("You chose Rock");
            console.log("The PC chose Scissors");
            console.log("You Win");
            
        } if ((playerTurn === paper || playerTurn === "p") && computerTurn === rock) {
            console.log("You chose Paper");
            console.log("The PC chose Rock");
            console.log("You Win");
            
        } if ((playerTurn === paper || playerTurn === "p") && computerTurn === paper) {
            console.log("You chose Paper");
            console.log("The PC chose Paper");
            console.log("It's a Draw");
            
        } if ((playerTurn === paper || playerTurn === "p") && computerTurn === scissors) {
            console.log("You chose Paper");
            console.log("The PC chose Scissors");
            console.log("You Lose");
            
        } if ((playerTurn === scissors || playerTurn === "s") && computerTurn === rock) {
            console.log("You chose Scissors");
            console.log("The PC chose Rock");
            console.log("You Lose");
            
        } if ((playerTurn === scissors || playerTurn === "s") && computerTurn === paper) {
            console.log("You chose Scissors");
            console.log("The PC chose Paper");
            console.log("You Win");
            
        } if ((playerTurn === scissors || playerTurn === "s") && computerTurn === scissors) {
            console.log("You chose Scissors");
            console.log("The PC chose Scissors");
            console.log("It's a Draw");
            
        } 

