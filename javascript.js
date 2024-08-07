//welcome to the game
console.log(`Hi there and welcome to the game!!`)

//array of options

let options=[`rock`, `paper`, `scissors`]

//function for computer choice

function getComputerChoice() {
    const n = Math.floor(Math.random() * options.length);

    if(n === 1){
        return 'rock';
    } 
    else if(n === 2){
        return 'paper';
    } 
    else return 'scissors';

}

//function for human choice
 
function getHumanChoice() {
    let choice = prompt("Choose Rock, Paper or Scissors");

    if(choice === `Rock`){
        return 'rock';
    } 
    else if(choice === `Paper`){
        return 'paper';
    } 
    else return 'scissors';
}

console.log(getHumanChoice())
//presenting scores



//play a round



//play 5 rounds and declare a winner