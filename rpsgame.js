function getComputerChoice (){
    let choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

// a round of rock paper scissors
// parameters playerSelection, computerSelection

    function playRound (computerSelection) {
        let playerSelection = prompt('Enter Rock, Paper or, Scissors'); 
        // To use prompt, delete playerSelection parameter - should not be declared twice. 
        if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
            alert ('You Lose! Paper beats Rock');
        } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {
            alert ('You Win! Rock beats Scissors');
        } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
            alert ('You Win! Paper beats Rock');
        } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {
            alert ('You Lose! Scissors beats Paper');
        } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
            alert ('You Lose! Rock beats Scissors')
        } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
            alert ('You Win! Scissors beats Paper')
        } else if (
            (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock') || 
            (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'scissors') ||
            (playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper') ) {
                alert ('Tied game');
        }  else if (playerSelection.toLowerCase() != 'rock' || 'paper' || 'scissors') { 
        alert ('Invalid entry');
        }
    }

const playerSelection = 'rock' ||'paper' ||'scissors';
const computerSelection = getComputerChoice();
console.log(playRound(computerSelection));
console.log(playRound(computerSelection));
console.log(playRound(computerSelection));
console.log(playRound(computerSelection));
console.log(playRound(computerSelection));


