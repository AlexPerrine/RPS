/* JavaScript Pseudo-Code to play Rock Paper Scissors
Input from user for choice of rock, paper or scissors
Random choice for computer oponent of rock, paper or scissors
Compare choices and determine winner

Rock > scissors
Scissors > paper
Paper > rock

*/
// Computer selection
function computerPlay(){
    let computerChoices = ['rock','paper','scissors'];
    let computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerChoice);
    return computerChoice;
}
//Player selection
function playerPlay(){
    let choice = window.prompt('Chose: Rock, Paper or Scissors.');
    let userChoice = choice.toLowerCase();
    return userChoice
}
//One round
function playRound(playerSelection,  computerSelection){
    if(playerSelection === computerSelection){
        return 'Tie game, play again.'
    }
    if(
    (playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' && computerSelection == 'paper')
    )   {
        return `You win, ${playerSelection} beats ${computerSelection}!`;
    }
    if(
    (computerSelection == 'rock' && playerSelection == 'scissors') ||
    (computerSelection == 'paper' && playerSelection == 'rock') ||
    (playerSelection == 'scissors' && playerSelection == 'paper')
    )   {
         return `You lose, ${computerSelection} beats ${playerSelection}!`;
    }
}

