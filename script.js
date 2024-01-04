const choices = ["Rock", "Paper", "Scissors"]
let userScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
const roundResult = document.querySelector(".roundResult")
const finalResult = document.querySelector(".finalResult")

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        
        playRound(e.target.textContent)
    })
})

function getComputerChoice() {
    let choice = Math.floor(Math.random() * choices.length)
    return choices[choice]
}

function playRound(userChoice) {
    if (finalResult) {
        finalResult.textContent = ""
    }
    userChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
    let computerChoice = getComputerChoice()
    if (userChoice === computerChoice) {
        roundResult.textContent = "It's a tie!"
    } else if (userChoice === "Rock" && computerChoice === "Scissors" || userChoice === "Paper" && computerChoice === "Rock" || userChoice === "Scissors" && computerChoice === "Paper") {
        roundResult.textContent = "You win!"
        userScore++;
    } else {
        roundResult.textContent = "You lose!"
        computerScore++;
    }
    if (userScore == 5 || computerScore == 5) {
        if (userScore > computerScore) {
        finalResult.textContent = `You are victorious! Your score is ${userScore}, while your opponent has ${computerScore} points`
        userScore = 0;
        computerScore = 0;
    } else if (computerScore > userScore) {
        finalResult.textContent = `You lost! Your score is ${userScore}, while your opponent has ${computerScore} points`
        userScore = 0;
        computerScore = 0;
    } else {
        finalResult.textContent = `It's a tie! You both have ${userScore} points!`
        userScore = 0;
        computerScore = 0;
    }
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