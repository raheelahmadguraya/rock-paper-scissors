// computerPlay function, randomly returns 'Rock','Paper', or 'Scissors'
function computerPlay() {
    const computerSelection = ["rock", "paper", "scissors"]; // array of choices
    return computerSelection[Math.floor(Math.random()*3)] // math.random chooses random # from 0-1, multiply by 3 to get random # from 0-3 and select an option from array
}

// playRound function, plays a single round of game
// takes two parameters: playerSelecton and ComputerSelection
// returns string declaring winner of round
function playRound(playerSelecton, computerSelection) {

    if(playerSelecton == "rock"){
        if(computerSelection == "rock"){
            return "It's a Tie!"
        }
        else if(computerSelection == "paper") {
            return "You Lose! Paper beats Rock"
        }
        else if(computerSelection == "scissors") {
            return "You Win! Rock beats Scissors"
        }
    }
    else if(playerSelecton == "paper"){
        if(computerSelection == "rock"){
            return "You Win! Paper beats Rock"
        }
        else if(computerSelection == "paper") {
            return "It's a Tie!"
        }
        else if(computerSelection == "scissors") {
            return "You Lose! Scissors beats Rock"
        }
    }
    else if(playerSelecton == "scissors"){
        if(computerSelection == "rock"){
            return "You Lose! Rock beats Scissors"
        }
        else if(computerSelection == "paper") {
            return "You Win! Scissors beats Paper"
        }
        else if(computerSelection == "scissors") {
            return "It's a Tie!"
        }
    }
}

// game function, calls playRound function to play 5 rounds of a game
// keeps track of score