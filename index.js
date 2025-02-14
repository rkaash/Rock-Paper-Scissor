// ROCK PAPER SCISSORS

const choices = ["Rock" , "Paper" , "Scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");


function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "" ; 

    if(playerChoice == computerChoice){
        result = "It's a tie !"
    }

    else{
        switch(playerChoice){
            case "Rock" :
                result=(computerChoice === "Scissors") ? "YOU WIN !" : "YOU LOSE !";
                break;
            
            case "Paper" :
                result=(computerChoice === "Rock") ? "YOU WIN !" : "YOU LOSE !";
                break;

            case "Scissors" :
                result=(computerChoice === "Paper") ? "YOU WIN !" : "YOU LOSE !";
                break;
        }
    }

    playerDisplay.textContent = `Player : ${playerChoice}`;
    computerDisplay.textContent = `Computer : ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText" , "redText" );

        switch(result){
            case "YOU WIN !":
                resultDisplay.classList.add("greenText");
                break;

            case "YOU LOSE !":
                resultDisplay.classList.add("redText");
                break;

        }
}
