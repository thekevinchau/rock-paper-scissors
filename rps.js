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
textBox.textContent = "hello i'm here"

function playGame(userInput){

}