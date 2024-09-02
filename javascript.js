//variable declaration

const options=[`Rock`, `Paper`, `Scissors`];
const disPlayer = document.querySelector("#player");
const disComputer = document.querySelector("#computer");
const disResult = document.querySelector("#result");
const rockButton = document.getElementById("rockBtn");
const paperButton = document.getElementById("Paper");
const scissorsButton = document.getElementById("Scissors");
const disPlScore = document.querySelector("#playerScore");
const disComScore = document.querySelector("#computerScore");
const disWinner = document.querySelector("#winner");
let humanScore = 0;
let computerScore = 0;

 
//Get the Computers Choice

function computerChoice(){
    const n = Math.floor(Math.random() * options.length);
    if(n === 1){
        return `Rock`;
    } 
    else if(n === 2){
        return `Paper`;
    } 
    else {
        return `Scissors`;
    }
 }

 //Play Round Function

function playRound(humanChoice) {
const computerSelection = computerChoice();
let outcome = "";
if (humanChoice == computerSelection) {
    outcome = `It's a tie! Both chose ${humanChoice}.`;
}

else if (
    (humanChoice == `Rock` && computerSelection == `Scissors`) ||
    (humanChoice == `Paper` && computerSelection == `Rock`) ||
    (humanChoice == `Scissors` && computerSelection == `Paper`)
) {
    humanScore++;
    outcome = `You win! ${humanChoice} beats ${computerSelection}.`;
} else {
    computerScore++;
    outcome = `You lose! ${computerSelection} beats ${humanChoice}.`;
}

disPlayer.textContent = `Your Choice: ${humanChoice}`;
disComputer.textContent = `Computers choice: ${computerSelection}`;
disResult.textContent = outcome;
disPlScore.textContent = `Your Score: ${humanScore}`;
disComScore.textContent = `Your Score: ${computerScore}`;

//Check for a winner after 5 rounds

if (humanScore === 5) {
disWinner.textContent = 'Congratulations! You are the winner!';
} else if (computerScore === 5) {
    disWinner.textContent = 'Sorry, you lost';
}
}

//Event Listeners

rockButton.onclick = () => {
    playRound("Rock");
};

paperButton.onclick = () => {
    playRound("Paper");
};

scissorsButton.onclick = () => {
    playRound("Scissors");
};