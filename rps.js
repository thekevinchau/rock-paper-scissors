let computerScore = 0;
let userScore

//Function that generates a random value between 1 and 3.
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 4);
    if (randomNumber === 1) {
        return "Rock"
    }
    else if (randomNumber === 2) {
        return "Paper"
    }
    else {
        return "Scissors";
    }
}

//function to play the game
function playGame(computerInput, userInput){
    console.log (`${computerInput}`)
    console.log (`${userInput}`)
    let winner = "";

    if (computerInput === userInput){
        textBox.textContent = "Draw!"
    }
    else if (computerInput === 'Rock' && userInput === "Paper"){
        textBox.textContent = "You win! Your Paper beats my Rock!\n"
        userScore++;
        winner = "user"
    }
    else if (computerInput === 'Rock' && userInput === "Scissors"){
        textBox.textContent = "You lose! My Rock beats your Scissors!\n"
        computerSCore++;
        winner = "computer"
    }
    else if (computerInput === 'Paper' && userInput === "Rock"){
        textBox.textContent = "You lose! My Paper beats your Rock!\n"
        computerScore++;
        winner = "computer"
    }
    else if (computerInput === 'Paper' && userInput === "Scissors"){
        textBox.textContent = "You win! Your Scissor beats my Paper!\n"
        userScore++;
        winner = "user"
    }
    else if (computerInput === 'Scissors' && userInput === 'Rock'){
        textBox.textContent = "You win! Your Rock beats my Scissors!\n"
        userScore++;
        winner = "user"
    }
    else if (computerInput === 'Scissors' && userInput === 'Paper'){
        textBox.textContent = "You lose! My Scissor beats your Paper!\n"
        computerScore++;
        winner = "computer"
    }
    else {
        textBox.textContent = "Not a valid input!"

    }
    console.log(userScore)
    return winner;
}
let body = document.querySelector('body')
//first: User and Computer input -> textBox -> Score
let resultContainer = document.createElement('div')
document.body.appendChild(resultContainer);
resultContainer.style.display = "flex";
resultContainer.style.flexDirection = "column"
resultContainer.style.alignItems = "center"
resultContainer.style.justifyContent = "center";

let userScoreBox = document.createElement('div')
let computerScoreBox = document.createElement('div')
let textBox = document.createElement('p')
resultContainer.appendChild(userScoreBox)
resultContainer.appendChild(computerScoreBox)
resultContainer.appendChild(textBox)


let rockButton = document.querySelector('#rock')
rockButton.addEventListener('click', () => playGame(getComputerChoice(), 'Rock')
);

let paperButton = document.querySelector('#paper')
paperButton.addEventListener('click', () => playGame(getComputerChoice(), 'Paper')
    )

let scissorButton = document.querySelector('#scissor')
scissorButton.addEventListener('click', () => playGame(getComputerChoice(), 'Scissors'))



