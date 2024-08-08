//welcome to the game
console.log(`Hi there and welcome to the game!!`)

//array of options

let options=[`rock`, `paper`, `scissors`]

//function for computer choice

function getComputerChoice() {
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

//function for human choice
 
function getHumanChoice() {
    let choice = prompt("Choose Rock, Paper or Scissors");

    if(choice == `Rock`){
        return `Rock`;
    } 
    else if(choice == `Paper`){
        return `Paper`;
    } 
    else if(choice == `Scissors`){
        return `Scissors`;
    }
}

//presenting scores

let humanScore = 0;
let computerScore = 0;

//play a round

function playRound (humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}.`);
    }

    if (
        (humanChoice == `Rock` && computerChoice == `Scissors`) ||
        (humanChoice == `Paper` && computerChoice == `Rock`) ||
        (humanChoice == `Scissors` && computerChoice == `Paper`)
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }

    console.log(`Human score: ${humanScore}, Computer score: ${computerScore}`);
}

//play 5 rounds and declare a winner
for (let i = 0; i < 5; i++){
    
    let humanChoice = getHumanChoice();
    let compChoice = getComputerChoice();
    playRound(humanChoice, compChoice);
    console.log(`Your score: ` + humanScore);
    console.log(`Computers score: ` + computerScore);
}