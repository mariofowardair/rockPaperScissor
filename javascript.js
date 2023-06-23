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

function oneRound() {
    let cmpChoice = getComputerChoice()
    let playerChoice = prompt("gimme something")
    playerChoice = playerChoice.toLowerCase()
    console.log("Player Choice was " + playerChoice + ".")
    console.log("Computer Choice was " + cmpChoice + ".")

    if (playerChoice == cmpChoice) {
        return "Tie Game!"
    }
    if (playerChoice == "rock" && cmpChoice == "scissor") {
        return "You win!"
    } 
    if (playerChoice == "scissor" && cmpChoice == "paper") {
        return "You win!"
    }
    if (playerChoice == "paper" && cmpChoice == "rock") {
        return "You win!"
    }
    return "You lose!"
}

function game() {
    let score = 0
    for (let i = 0; i < 5; i++) {
        let result = oneRound()
        if (result == "You win!") {
            score++;
        }
    }
    console.log("You won " + score + " times!")
}

//console.log(game())

const container = document.querySelector('.tester')

const holder = document.createElement('div')
holder.classList.add('content')
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
*/

const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('dblclick', () => {
    alert(button.id);
  });
});