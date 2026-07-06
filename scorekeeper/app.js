const limit = document.querySelector("#limit");
const scoreLabel = document.querySelector("#scoreLabel");
const playerOneBtn = document.querySelector("#playerOneBtn");
const playerTwoBtn = document.querySelector("#playerTwoBtn");
const reset = document.querySelector("#reset");
const playerOneLabel = document.querySelector("#playerOne");
const playerTwoLabel = document.querySelector("#playerTwo");
const scoreKeeper = document.querySelector(".scoreKeeper");

let maxScore = 1;
let playerOneCount = 0;
let playerTwoCount = 0;

const winnerDiv = document.createElement("div");
winnerDiv.classList.add("winnerDiv");

const winnerLabel = document.createElement("h2")
winnerDiv.append(winnerLabel)


function changeLabel(){
    playerOneLabel.innerText = playerOneCount;
    playerTwoLabel.innerText = playerTwoCount;
}

function stopGame(){
    playerOneBtn.disabled = true;
    playerTwoBtn.disabled = true;
}

function chooseWinner(){
    if (playerOneCount === maxScore) {
        stopGame()
        playerOneLabel.classList.add("winner");
        playerTwoLabel.classList.add("loser");

        winnerLabel.innerText = "Player One WON"
        scoreKeeper.append(winnerDiv)

    } else if(playerTwoCount === maxScore){
        stopGame()
        playerTwoLabel.classList.add("winner");
        playerOneLabel.classList.add("loser");

        winnerLabel.innerText = "Player Two WON"
        scoreKeeper.append(winnerDiv)
    }
}

limit.addEventListener("change", function(){
    maxScore = parseInt(this.value);
})

playerOneBtn.addEventListener("click", ()=>{
    playerOneCount+=1;
    chooseWinner();
    changeLabel();
});

playerTwoBtn.addEventListener("click", ()=>{
    playerTwoCount+=1;
    chooseWinner();
    changeLabel();
});

reset.addEventListener("click", ()=>{
    playerOneCount = 0;
    playerTwoCount = 0;
    playerOneBtn.disabled = false;
    playerTwoBtn.disabled = false;
    changeLabel();

    playerOneLabel.classList.remove("winner", "loser")
    playerTwoLabel.classList.remove("loser", "winner")
    
    scoreKeeper.removeChild(winnerDiv);
})