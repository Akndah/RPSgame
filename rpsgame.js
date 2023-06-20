function getComputerChoice (){
    let choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

// a round of rock paper scissors
// parameters playerSelection, computerSelection


function playRound (playerSelection, computerSelection) {
    let playerSelection = prompt('Enter Rock, Paper or, Scissors');
    if (playerSelection.toLowerCase === 'rock', computerSelection === 'paper') {
        alert ('You Lose! Paper beats Rock');
    } else if (playerSelection.toLowerCase === 'rock', computerSelection === 'scissors') {
        alert ('You Win! Rock beats Scissors');
    } else if (playerSelection.toLowerCase === 'rock', computerSelection === 'rock'){
        alert ('Tied game');
    } else if (playerSelection.toLowerCase !== 'rock') { 
        alert ('wrong entry');
    }
}

const playerSelection ='rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


