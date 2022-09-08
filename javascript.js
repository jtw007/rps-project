let getComputerChoice = Math.floor(Math.random());

function getComputerChoice() {
    console.log('Rock');
    console.log('Paper');
    console.log('Scissors');
}
getComputerChoice();

function playerSelection (){

}

function computerSelection () {

}

function playRound(playerSelection, computerSelection) {
    // code 
}


if (playerSelection === Rock && computerSelection === Paper){
    console.log("You lose! Paper beats rock!");
}
else if (playerSelection === Rock && computerSelection === Rock) {
    console.log("It's a draw!");
}
else if (playerSelection === Rock && computerSelection === Scissors) {
    console.log('You win! Rock beats scissors!');
}
else if (playerSelection === Paper && computerSelection === Rock){
    console.log('You win! Paper beats rock!');
}
else if (playerSelection === Paper && computerSelection === Paper) {
    console.log("It's a draw!");
}
else if (playerSelection === Paper && computerSelection === Scissors) {
    console.log("You lose! Scissors beats paper!");
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