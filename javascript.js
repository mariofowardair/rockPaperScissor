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
    
    /* let playerChoice = prompt("gimme something")
    playerChoice = playerChoice.toLowerCase() 
    console.log("Player Choice was " + playerChoice + ".") */
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
        //document.getElementById('result').innerText = 'bruh'
        oneRound(e.target.innerText)
    })
}) 

document.getElementById('playerScore').innerText = "Your Score: " + playerScore
document.getElementById('cmpScore').innerText = "The Computer's Score: " + cmpScore


// actual implementation
/*
const rock = document.querySelector('#rock')
rock.addEventListener('click', () => {
    console.log("Player chose rock")
    let result = oneRound("rock")
    if (result == "You win!") {
        playerScore++
    } else if (result == "You lose!") {
        cmpScore++
    }
    console.log(playerScore)
    console.log(cmpScore)
    ///////////////////////////////////////////////////////////
    const scoreHolder = document.querySelector('.scoreHolder')
    const daScore = document.createElement('div')
    daScore.classList.add('daScore')
    daScore.textContent = playerScore
    scoreHolder.appendChild(daScore)
    ///////////////////////////////////////////////////////////

    if (playerScore == 5) {
        console.log("You beat the computer!")

        const holder3 = document.querySelector('.message')
        const child3 = document.createElement('div')
        child3.classList.add('content')
        child3.textContent = "You beat the computer!"

        holder3.appendChild(child3)
    }
    if (cmpScore == 5) {
        console.log("You lost to a computer! hahah")

        const holder3 = document.querySelector('.message')
        const child3 = document.createElement('div')
        child3.classList.add('content')
        child3.textContent = "You lost to a computer! hahah"

        holder3.appendChild(child3)
    }
})

const paper = document.querySelector('#paper')
paper.addEventListener('click', () => {
    console.log("Player chose paper")
    let result = oneRound("paper")
    if (result == "You win!") {
        playerScore++
    } else if (result == "You lose!") {
        cmpScore++
    }
    console.log(playerScore)
    console.log(cmpScore)
    ///////////////////////////////////////////////////////////
    const scoreHolder = document.querySelector('.scoreHolder')
    const daScore = document.createElement('div')
    daScore.classList.add('daScore')
    daScore.textContent = playerScore
    scoreHolder.appendChild(daScore)
    ///////////////////////////////////////////////////////////

    if (playerScore == 5) {
        console.log("You beat the computer!")
        
        const holder3 = document.querySelector('.message')
        const child3 = document.createElement('div')
        child3.classList.add('content')
        child3.textContent = "You beat the computer!"

        holder3.appendChild(child3)
    }
    if (cmpScore == 5) {
        console.log("You lost to a computer! hahah")

        const holder3 = document.querySelector('.message')
        const child3 = document.createElement('div')
        child3.classList.add('content')
        child3.textContent = "You lost to a computer! hahah"

        holder3.appendChild(child3)
    }
})

const scissor = document.querySelector('#scissor')
scissor.addEventListener('click', () => {
    console.log("Player chose scissor")
    let result = oneRound("scissor")
    if (result == "You win!") {
        playerScore++
    } else if (result == "You lose!") {
        cmpScore++
    }
    console.log(playerScore)
    console.log(cmpScore)
    ///////////////////////////////////////////////////////////
    const scoreHolder = document.querySelector('.scoreHolder')
    const daScore = document.createElement('div')
    daScore.classList.add('daScore')
    daScore.textContent = playerScore
    scoreHolder.appendChild(daScore)
    ///////////////////////////////////////////////////////////

    if (playerScore == 5) {
        console.log("You beat the computer!")

        const holder3 = document.querySelector('.message')
        const child3 = document.createElement('div')
        child3.classList.add('content')
        child3.textContent = "You beat the computer!"

        holder3.appendChild(child3)
    }
    if (cmpScore == 5) {
        console.log("You lost to a computer! hahah")

        const holder3 = document.querySelector('.message')
        const child3 = document.createElement('div')
        child3.classList.add('content')
        child3.textContent = "You lost to a computer! hahah"

        holder3.appendChild(child3)
    }
})
*/












//tester code and notes
/*
const container = document.querySelector('.tester')

const holder = document.createElement('div')
holder.classList.add('content')
holder.textContent = "This is the megabruh text!"

container.appendChild(holder)




const container = document.querySelector('.tester')

const holder = document.createElement('div')
holder.classList.add('content') // 'content' is the name of the div
holder.textContent = "This is the megabruh text!"

container.appendChild(holder)





// p with red text that says "hey im red"
const holder2 = document.createElement('p')
holder2.style.color = 'red'
holder2.textContent = "Hey I'm red!"
container.appendChild(holder2)

// the last practice one
const holder3 = document.createElement('div')
holder3.style.cssText = "background-color: pink; border: solid black 5px"

const one = document.createElement('h1')
one.textContent = "I'm in a div"
holder3.appendChild(one)

const two = document.createElement('p')
two.textContent = "ME TOO!"
holder3.appendChild(two)

container.appendChild(holder3)




//button stuff
/*
const btn = document.querySelector('#btn')
btn.addEventListener('click', () => {
    alert("Hello world!")
})
btn.addEventListener('click', function (e) {
    console.log(e);
});
btn.addEventListener('click', function (e) {
    console.log(e.target);
});
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});


const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('dblclick', () => {
    alert(button.id);
  });
}); */