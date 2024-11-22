let userInput = document.getElementById('userChoice')
let computerGenerated = document.getElementById('computerChoice')
let resultElement = document.getElementById('result')
let resetButton = document.getElementById('resetButton')

const choices = ["Rock" , "Paper" , "Scissors"]

function getComputerChoice(){
    return choices[Math.floor(Math.random() * choices.length)]
}

function determineWinner(userChoice , computerChoice){
    if (userChoice === computerChoice){
        return "It's a tie"
    }
    if ((userChoice == "Rock" && computerChoice == "Scissors") || 
        (userChoice == "Scissors" && computerChoice == "Paper") ||
         (userChoice == "Paper" && computerChoice == "Rock")){
            return "You Win"
         }
         else {
            return "Computer Wins"
         }
}

function handleChoice(userChoice){
    let computerGuess = getComputerChoice()

    userInput.textContent = userChoice
    computerGenerated.textContent = computerGuess

    resultElement.textContent = determineWinner(userChoice , computerGuess)
    disableButtons()
    resetButton.style.display = "inline-block";
}

function disableButtons(){
    const buttons = document.querySelectorAll('.choice')
    buttons.forEach(button=>{
        button.disabled = true
    })
}
function resetGame(){
    userInput.textContent = "None"
    computerGenerated.textContent = "None"
    resultElement.textContent = ''
    resetButton.style.display = "none"

    const buttons = document.querySelectorAll('.choice')
    buttons.forEach(button => {
        button.disabled = false
    })
}

document.getElementById('rock').addEventListener('click' , () => handleChoice('Rock'))
document.getElementById('paper').addEventListener('click' , () => handleChoice('Paper') )
document.getElementById('scissors').addEventListener('click' , () => handleChoice('Scissors'))

resetButton.addEventListener('click' ,resetGame)