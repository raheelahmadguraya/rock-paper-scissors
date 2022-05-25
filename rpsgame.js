// computerPlay function, randomly returns 'Rock','Paper', or 'Scissors'
function computerPlay(){
    const computerSelection = ["rock", "paper", "scissors"];
    return computerSelection[Math.floor(Math.random()*3)]
}

// playRound function, plays a single round of game
// takes two parameters: playerSelecton and ComputerSelection
// returns string declaring winner of round

// game function, calls playRound function to play 5 rounds of a game
// keeps track of score