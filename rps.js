/* JavaScript Pseudo-Code to play Rock Paper Scissors
Input from user for choice of rock, paper or scissors
Random choice for computer oponent of rock, paper or scissors
Compare choices and determine winner

Rock > scissors
Scissors > paper
Paper > rock

*/
//DOM Variable creation
let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.scoreboard');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
const user = document.getElementById('user-label');

//Computer choice
function computerPlay() {
    let choices = ['r','p','s'];
    let randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}
//Converting to words
function convert(letter){
    if (letter === 'r') {return 'Rock'}
    if (letter === 'p') {return 'Paper'}
    if (letter === 's') {return 'Scissors'}
}
//Get user name
function userName(){
    const user = window.prompt('Who challenges the computer?')
    return user
}
//Game Scenarios
function win(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice)
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convert(userChoice)} beats ${convert(computerChoice)}, you win!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'),250)
}
function lose(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice)
    compScore++
    compScore_span.innerHTML = compScore;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convert(computerChoice)} beats ${convert(userChoice)}, you lost!`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'),250)
}
function draw(userChoice) {
    const userChoice_div = document.getElementById(userChoice)
    result_p.innerHTML = 'Draw, play again!';
    userChoice_div.classList.add('grey-glow');
    setTimeout(() => userChoice_div.classList.remove('grey-glow'),300)
}

//Game function
function game(userChoice) {
    const computerChoice = computerPlay();
    switch(userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}
function main() {
rock_div.addEventListener('click',() => game('r'));
paper_div.addEventListener('click', () => game('p'));
scissors_div.addEventListener('click', () => game('s'));
}
main()

