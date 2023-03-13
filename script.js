//pseudocode:
// just a little thought before I do it tomorrow. - which is my only task unless it's done faster than a few hours.
// make sure to console log the computers randomly generated one before anything else.
//
// have the computer randomly generate either rock, paper or scissors
// generate random number between 0 to 1
// if x <= 0.3333 = rock
// if x <= 0.6666 = paper
// if x > 0.6666 = scissors
// might not have to use numbers if i can get 1 of 3 randomly listed strings

// have the user input rock, paper or scissors as userChoice

// if userChoice is rock, and cpuChoice rock, then draw
// else if userChoice is rock, and cpuChoice is paper, then lose
//    else userChoice is rock, and cpuChoice is scissors, then WIN!
//
// if userChoice is paper, and cpuChoice rock, then WIN!
// else if  userChoice is paper, and cpuChoice is paper, then draw
//     else userChoice is paper, and cpuChoice is scissors, then lose
//
// if userChoice is scissors, and cpuChoice rock, then lose
// else if userChoice is scissors, and cpuChoice is paper, then WIN!
//    else userChoice is scissors, and cpuChoice is scissors, then draw


/// - first, get the computer to generate a random rock, paper or scissors, and have it logged in the console.
// the rest can come later. 



// function playRound(getComputerChoice, getPlayerChoice) {

let compChoice
function getComputerChoice() {


    num = Math.random()

    if (num <= 0.33333333) {
        compChoice = 'Rock';
    } else if (num <= 0.66666666) {
        compChoice = 'Paper';
    } else compChoice = 'Scissors';
    console.log(compChoice)
    return


}
// does the above function, and get the random computer guess of rock, paper or scissors


let playerSelection = '';

function getPlayerChoice() {

    playerSelection = prompt('Rock, Paper or Scissors?');


    if (playerSelection.toLowerCase() == 'rock') {
        playerSelection = 'Rock';
    } else if (playerSelection.toLowerCase() == 'paper') {
        playerSelection = 'Paper';
    } else if (playerSelection.toLowerCase() == 'scissors') {
        playerSelection = 'Scissors';
    } else getPlayerChoice();



}



console.log(playerSelection)


let result = "";
function playRound(playerSelection, compChoice) {

    if (playerSelection == 'Rock' && (compChoice == 'Rock')) {
        return result = 'You picked Rock and drew with Rock'
    } else if (playerSelection == 'Rock' && (compChoice == 'Paper')) {
        return result = 'You picked Rock and lost to Paper'
    } else if (playerSelection == 'Rock' && (compChoice == 'Scissors')) {
        return result = 'You picked Rock and beat Scissors!'
    } else if (playerSelection == 'Paper' && (compChoice == 'Rock')) {
        return result = 'You picked Paper and beat Rock! '
    } else if (playerSelection == 'Paper' && (compChoice == 'Paper')) {
        return result = 'You picked Paper and drew with Paper'
    } else if (playerSelection == 'Paper' && (compChoice == 'Scissors')) {
        return result = 'You picked Paper and lost to Scissors'
    } else if (playerSelection == 'Scissors' && (compChoice == 'Rock')) {
        return result = 'You picked Scissors and lost to Rock'
    } else if (playerSelection == 'Scissors' && (compChoice == 'Paper')) {
        return result = 'You picked Scissors and beat Paper!'
    } else if (playerSelection == 'Scissors' && (compChoice == 'Scissors')) {
        return result = 'You picked Scissors and drew with Scissors'
    } else { 
    
}
}

playRound(playerSelection, compChoice)

// let results = x


function game() {


    for (let i = 0; i < 5; i++) {

        getComputerChoice();
        getPlayerChoice();
        playRound(playerSelection, compChoice);
        console.log(result);
    }
}

game()


     // the only thing that doesnt work is the else result?
     // it doesnt say please select something better
// console each result in the game function????



// maybe put the getcompchoice and getplayerchoice functions within the play round one
// then for the loop it only needs looping 5 tinmes for playround, and displaying the result everytime?
// EVERY BAD RESULT I GET, ITS SAYING UNDEFINED. IF I START WITH A TRUE RESULT, IT JUST REPEATS THAT EVERY TIME IF THE NEXT ONE IS BAD.


// function game() 
// for (let i = 0; i < 5; i++) {



//function getComputerChoice() {
// function playRound(playerSelection, computerSelection)  


