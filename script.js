const choices = ["Rock", "Paper", "Scissors"]
let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * choices.length)
    return choices[choice]
}

function playRound() {
    let userChoice = prompt("Choose your weapon:");
    userChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
    let computerChoice = getComputerChoice()
    if (userChoice === computerChoice) {
        console.log("It's a tie!")
    } else if (userChoice === "Rock" && computerChoice === "Scissors" || userChoice === "Paper" && computerChoice === "Rock" || userChoice === "Scissors" && computerChoice === "Paper") {
        console.log("You win!")
        userScore++;
    } else {
        console.log("You lose!")
        computerScore++;
    }
}

function game() {
    for(let i = 0; i < 5; i++) {
        playRound()
    } 
    if (userScore > computerScore) {
        console.log(`You are victorious! Your score is ${userScore}, while your opponent has ${computerScore} points`)
    } else if (computerScore > userScore) {
        console.log(`You lost! Your score is ${userScore}, while your opponent has ${computerScore} points`)
    } else {
        console.log(`It's a tie! You both have ${userScore} points!`)
    }
}