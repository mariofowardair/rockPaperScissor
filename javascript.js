let playerScore = 0
let cmpScore = 0

// computer picks a random number, then you truncate it and check which number it is from 0 to 2
function getComputerChoice() {
    let cmpNum = Math.floor(Math.random() * 3)

    if (cmpNum == 0) {
        return ("rock")
    } else if (cmpNum == 1) {
        return ("paper")
    } else {
        return ("scissor")
    }
}

function oneRound(playerChoice) {
    let cmpChoice = getComputerChoice()

    console.log(playerChoice)
    console.log("Computer Choice was " + cmpChoice + ".")

    if (playerChoice.toLowerCase() == cmpChoice) {
        document.getElementById('result').innerText = 'You tied!'
        //return "Tie Game!"
    } else if ((playerChoice == "ROCK" && cmpChoice == "scissor") ||
        (playerChoice == "SCISSOR" && cmpChoice == "paper") ||
        (playerChoice == "PAPER" && cmpChoice == "rock")) {
            playerScore++
            document.getElementById('result').innerText = 'You won this round! \n The computer chose: ' + cmpChoice
            //return "You win!"
    } else {
        cmpScore++
        document.getElementById('result').innerText = 'The computer won this round! \n The computer chose: ' + cmpChoice
        //return "You lose!"
    }
    document.getElementById('playerScore').innerText = "Your Score: " + playerScore
    document.getElementById('cmpScore').innerText = "The computer's score: " + cmpScore

    if (playerScore == 5) {
        document.getElementById('finalScore').innerText = "You won!\n Your Score is: " + playerScore + "."
        document.getElementById('rock').disabled = true;
        document.getElementById('paper').disabled = true;
        document.getElementById('scissor').disabled = true;
        askQuestion()

    } else if (cmpScore == 5) {
        document.getElementById('finalScore').innerText = "The computer won :(\n It's score is: " + cmpScore + "."
        document.getElementById('rock').disabled = true;
        document.getElementById('paper').disabled = true;
        document.getElementById('scissor').disabled = true;
        askQuestion()
    }
    const resetter = document.querySelector('#reset')
    resetter.addEventListener('click', () => {
        reset()
    })
}

function askQuestion() {
    document.getElementById('question').innerText = "Would you like to restart?"
    const container = document.querySelector('#reset')

    const content = document.createElement('button')
    // the button's ID name is reset
    content.classList.add('reset')
    content.textContent = 'RESET'

    container.appendChild(content)
}

function reset() {
    playerScore = 0
    cmpScore = 0
    document.getElementById('playerScore').innerText = "Your Score: " + playerScore
    document.getElementById('cmpScore').innerText = "The computer's score: " + cmpScore

    document.getElementById('rock').disabled = false;
    document.getElementById('paper').disabled = false;
    document.getElementById('scissor').disabled = false;

    const container = document.querySelector('#reset')
    container.removeChild(container.firstElementChild);

    document.getElementById('question').innerText = ""
    document.getElementById('finalScore').innerText = ""
    document.getElementById('result').innerText = ""

}

const allButts = document.querySelectorAll(".choose")
allButts.forEach((button) => {
    button.addEventListener('click', (e) => {
        oneRound(e.target.innerText)
    })
}) 

document.getElementById('playerScore').innerText = "Your Score: " + playerScore
document.getElementById('cmpScore').innerText = "The Computer's Score: " + cmpScore