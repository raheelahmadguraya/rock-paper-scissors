// computerPlay function, randomly returns 'Rock','Paper', or 'Scissors'
function computerPlay() {
    const computerSelection = ["rock", "paper", "scissors"]; // array of choices
    return computerSelection[Math.floor(Math.random()*3)] // math.random chooses random # from 0-1, multiply by 3 to get random # from 0-3 and select an option from array
}

// playRound function, plays a single round of game
// takes two parameters: playerSelecton and ComputerSelection
// returns string declaring winner of round
function playRound(playerSelection, computerSelection) {

    if(playerSelection == "rock"){
        if(computerSelection == "rock") {
            return "It's a Tie!"
        }
        else if(computerSelection == "paper") {
            computerScore += 1;
            return "You Lose! Paper beats Rock"
        }
        else if(computerSelection == "scissors") {
            playerScore += 1;
            return "You Win! Rock beats Scissors"
        }
    }
    else if(playerSelection == "paper") {
        if(computerSelection == "rock") {
            playerScore += 1;
            return "You Win! Paper beats Rock"
        }
        else if(computerSelection == "paper") {
            return "It's a Tie!"
        }
        else if(computerSelection == "scissors") {
            computerScore += 1;
            return "You Lose! Scissors beats Rock"
        }
    }
    else if(playerSelection == "scissors") {
        if(computerSelection == "rock") {
            computerScore += 1;
            return "You Lose! Rock beats Scissors"
        }
        else if(computerSelection == "paper") {
            playerScore += 1;
            return "You Win! Scissors beats Paper"
        }
        else if(computerSelection == "scissors") {
            return "It's a Tie!"
        }
    }
}

// game function, calls playRound function to play 5 rounds of a game
// keeps track of score
function game(){
    for (let i = 0; i < 5; i++){
        computerSelection = computerPlay();
        playerSelection = "rock";
        playRound(playerSelection, computerSelection);
    }
}

function displayResult(){
    console.log("Player score:", playerScore);
    console.log("Computer score:", computerScore);
    if(playerScore == computerScore){
        console.log("It's a tie!");
    } 
    else if(playerScore < computerScore){
        console.log("Computer Wins!");
    }
    else if(playerScore > computerScore){
        console.log("You Win!");
    }
}

let playerScore = 0;
let computerScore = 0;
game();
displayResult();