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
    [2,4,6],
    [6,7,8]

];

function initgame(){
    currentPlayer = "X"
    gameGrid = ["","","","","","","","",""]
    newGameBtn.classList.add("invisible");
    boxes.forEach((box,index) => {
        box.innerHTML= "";
        boxes[index].style.pointerEvents = 'all'
    })
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
         
}

initgame();


boxes.forEach((box, index) =>{
    box.addEventListener("click", () => {
        handleClick(index);
    })

});

function handleClick(index){
    if(gameGrid[index] == ""){
        boxes[index].innerHTML = currentPlayer;
        gameGrid[index] = currentPlayer;
        boxes[index].style.pointerEvents = 'none'
        swapTurn();
        checkWinner();
    }
    
}

function swapTurn(){
    if(currentPlayer == "X"){
        currentPlayer = "O";
        
    }
    else{
        currentPlayer = "X";
        
    }
    gameInfo.innerHTML = `Current Player - ${currentPlayer}`;

}

function checkWinner(){
    let answer = ""

    winningPositions.forEach((position) =>{
        if((gameGrid[position[0]] != "" || gameGrid[position[1]] || gameGrid[position[2]] !== "")
        && (gameGrid[position[0]] == gameGrid[position[1]]) && (gameGrid[position[1]] === gameGrid[position[2]])){
            
            //cheking if winner is x
            if(gameGrid[position[0]] === "X")
                answer = 'X';
            else
                answer="O";

            boxes.forEach((box)=> {
                box.style.pointerEvents = 'none';
            })

            boxes[position[0]].classList.add("bg-black");
            boxes[position[1]].classList.add("bg-black");
            boxes[position[2]].classList.add("bg-black");
            

        }

    });

    if(answer !== ""){
        newGameBtn.classList.remove("invisible")
        gameInfo.innerHTML = `Game Winner - ${answer}`;
        return
        
    }

    let fillCount = 0;
    gameGrid.forEach((box)=> {
        if(box !== "")
            fillCount++;
    });

    
    
}

newGameBtn.addEventListener("click", initgame)




// newGameBtn.classList.remove("invisible");