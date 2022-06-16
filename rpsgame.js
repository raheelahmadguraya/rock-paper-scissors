// computerPlay function, randomly returns 'Rock','Paper', or 'Scissors'
function computerPlay() {
    const computerSelection = ["rock", "paper", "scissors"]; // array of choices
    return computerSelection[Math.floor(Math.random()*3)] // math.random chooses random # from 0-1, multiply by 3 to get random # from 0-3 and select an option from array
}

// playRound function, plays a single round of game
// takes two parameters: playerSelecton and ComputerSelection
// returns string declaring winner of round
function playRound(playerSelection) {
    if((playerScore == 5) || (computerScore == 5)){
        return;
    }

    console.log("Player chooses:", playerSelection)

    computerSelection = computerPlay();
    console.log("Computer chooses:", computerSelection)

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
            return "You Lose! Scissors beats Paper"
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

function updateResult(){
    document.getElementById('gameScore').textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
}

function displayWinner(){
    if(playerScore == 5){
        document.getElementById('display').textContent = `You win`;
    }
    if(computerScore == 5){
        document.getElementById('display').textContent = `Computer wins`;
    }
}

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {

        button.addEventListener('click', () => {
            playerSelection = (button.id);
            playRound(playerSelection);
            updateResult();
            if((playerScore == 5) || (computerScore == 5)){
                displayWinner();
            }
        });
    });
