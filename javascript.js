let playerSelection = ['Rock', 'Paper', 'Scissors'];
let computerSelection = ['Rock', 'Paper', 'Scissors'];

function playerSelection() {
    console.log(playerSelection[0]);
}

function computerSelection() {
    console.log(computerSelection[1])
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === Rock && computerSelection === Paper){
        console.log("You lose! Paper beats rock!");
}
    else if (playerSelection === Rock && computerSelection === Scissors) {
        console.log('You win! Rock beats scissors!');
}      
    else if (playerSelection === Rock && computerSelection === Rock) {
        console.log("It's a draw!");
} 
    else if (playerSelection === Paper && computerSelection === Scissors) {
        console.log("You lose! Scissors beats paper!");
}  
    else if (playerSelection === Paper && computerSelection === Rock){
        console.log('You win! Paper beats rock!');
}
    else if (playerSelection === Paper && computerSelection === Paper) {
        console.log("It's a draw!");
}
    else if (playerSelection === Scissors && computerSelection === Rock) {
        console.log("You lose! Rock beats scissors!");
}
    else if (playerSelection === Scissors && computerSelection === Paper) {
        console.log("You win! Scissors beats paper!");
}
    else if (playerSelection === Scissors && computerSelection ===Scissors) {
        console.log("It's a draw!");
}
}
