const choices = ["rock", "paper","scissors"];
const button = document.getElementById("button");
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const tieScoreDisplay = document.getElementById("tieScoreDisplay");

const clickSound = new Audio("sound/clickPop.mp3");
const winSound = new Audio("sound/winSound.mp3");
const loseSound = new Audio("sound/loseSound.mp3");
const tieSound = new Audio("sound/tieSound.mp3");

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

button.addEventListener("click", event=>{
    clickSound.currentTime=0;
    clickSound.play();
})

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random()*3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "IT'S A TIE";
    }

    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN" : "YOU LOSE";

            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN" : "YOU LOSE";
            
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN" : "YOU LOSE";
            
            
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText","redText");

    switch(result){
        case "YOU WIN":
            resultDisplay.classList.add(".greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            winSound.currentTime = 0;
            winSound.play();
            break;
            
        
        case "YOU LOSE":
            resultDisplay.classList.add(".greenText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            loseSound.currentTime = 0;
            loseSound.play();
            break;

        case "IT'S A TIE":
            resultDisplay.classList.add("blackText");
            tieScore++;
            tieScoreDisplay.textContent = tieScore;
            tieSound.currentTime = 0;
            tieSound.play();
            break;
    }
}

