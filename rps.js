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
        return 'tie';
    }
    if(
    (playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' && computerSelection == 'paper')
    )   {
        return 'player';
    }
    if(
    (computerSelection == 'rock' && playerSelection == 'scissors') ||
    (computerSelection == 'paper' && playerSelection == 'rock') ||
    (computerSelection == 'scissors' && playerSelection == 'paper')
    )   {
         return 'computer';
    }
}
//Game with a user defined number of rounds, set to 5 as default.
function game(rounds = 5){
    const name = window.prompt('Who challenges the computer?');
    let player = 0;
    let computer = 0;

    for (let i = 0; i < rounds; i++) {
        let x = playRound(playerPlay(),computerPlay());
        if (x == 'player'){
            player++;
            console.log(`${name} won this round!`);
        }
        else if( x == 'computer'){
            computer++;
            console.log('The computer won this round!')
        }
        else{
            i--;
            console.log('Tie, play again');
        }
    };
    console.log(`${name} won ${player} game(s) and the computer won ${computer} game(s).`)
}
