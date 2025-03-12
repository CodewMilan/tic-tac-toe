const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".game-info");
const newGameBtn = document.querySelector(".btn");


let currentPlayer;
let gameGrid;

const winningPositions =[
    [0,1,2],
    [3,4,5],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

];

function initgame(){
    currentPlayer = "X"
    gameGrid = ["","","","","","","","",""]
    newGameBtn.classList.add("invisible");
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

initgame();


boxes.forEach((box, index) =>{
    box.addEventListener("click", () => {
        handleClick(index);
    })

});