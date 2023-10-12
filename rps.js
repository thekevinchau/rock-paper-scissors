//Function that generates a random value between 1 and 3.
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 4);
    if (randomNumber === 1) {
        return "rock"
    }
    else if (randomNumber === 2) {
        return "paper"
    }
    else {
        return "scissors";
    }
}


let buttonContainer= document.querySelector(".button-container")
let textBox = document.createElement('div')
textBox.style.display = "flex";
textBox.style.justifyContent = "center";
buttonContainer.after(textBox);
document.body.append(textBox);
textBox.textContent = ""
textBox.style.fontWeight = "bold";

//function to play the game
function playGame(computerInput, userInput){
    console.log (`${computerInput}`)
    console.log (`${userInput}`)

    if (computerInput === userInput){
        textBox.textContent = "Draw!"
    }
    else if (computerInput === 'rock' && userInput === "paper"){
        textBox.textContent = "You win! Paper beats rock!"
    }
    else if (computerInput === 'rock' && userInput === "scissor"){
        textBox.textContent = "You lose! Rock beats scissor!"
    }
    else if (computerInput === 'paper' && userInput === "rock"){
        textBox.textContent = "You lose! Paper beats rock!"
    }
    else if (computerInput === 'paper' && userInput === "scissor"){
        textBox.textContent = "You win this round! Scissor beats paper!"
    }
    else if (computerInput === 'scissor' && userInput === 'rock'){
        textBox.textContent = "You win! Rock beats scissor!"
    }
    else if (computerInput === 'scissor' && userInput === 'paper'){
        textBox.textContent = "You lose!! Scissor beats paper!"
    }
    else {
        textBox.textContent = "Not a valid input!"

    }
}
playGame('scissor', 'rock')

