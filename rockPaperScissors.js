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
            console.log("\x1b[36mThe PC chose Rock\x1b[0m");
            console.log("\x1b[30mIt's a Draw\x1b[0m");
            
        } if ((playerTurn === rock || playerTurn === "r") && computerTurn === paper) {
            console.log("You chose Rock");
            console.log("\x1b[36mThe PC chose Paper\x1b[0'");
            console.log("\x1b[35mYou Lose\x1b[0m");
            
        } if ((playerTurn === rock || playerTurn === "r") && computerTurn === scissors) {
            console.log("You chose Rock");
            console.log("\x1b[36mThe PC chose Scissors\x1b[0m");
            console.log("\x1b[34mYou Win\x1b[0m");
            
        } if ((playerTurn === paper || playerTurn === "p") && computerTurn === rock) {
            console.log("You chose Paper");
            console.log("\x1b[36mThe PC chose Rock\x1b[0m");
            console.log("\x1b[34mYou Win\x1b[0m");
            
        } if ((playerTurn === paper || playerTurn === "p") && computerTurn === paper) {
            console.log("You chose Paper");
            console.log("\x1b[36mThe PC chose Paper\x1b[0m");
            console.log("\x1b[30mIt's a Draw\x1b[0m");
            
        } if ((playerTurn === paper || playerTurn === "p") && computerTurn === scissors) {
            console.log("You chose Paper");
            console.log("\x1b[36mThe PC chose Scissors\x1b[0m");
            console.log("\x1b[35mYou Lose\x1b[0m");
            
        } if ((playerTurn === scissors || playerTurn === "s") && computerTurn === rock) {
            console.log("You chose Scissors");
            console.log("\x1b[36mThe PC chose Rock\x1b[0m");
            console.log("\x1b[35mYou Lose\x1b[0m");
            
        } if ((playerTurn === scissors || playerTurn === "s") && computerTurn === paper) {
            console.log("You chose Scissors");
            console.log("\x1b[36mThe PC chose Paper\x1b[0m");
            console.log("\x1b[34mYou Win\x1b[0m");
            
        } if ((playerTurn === scissors || playerTurn === "s") && computerTurn === scissors) {
            console.log("You chose Scissors");
            console.log("\x1b[36mThe PC chose Scissors\x1b[0m");
            console.log("\x1b[30mIt's a Draw\x1b[0m");
            
        } 

