const choices = ["Rock", "Paper", "Scissors"]

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
    } else {
        console.log("You lose!")
    }
}