let boxes =  document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true ; //playerX , playerO


//all possible patterns in game
const winPattern = [ 
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


//Reset the game
const resetGame = () => {
    turnO = true;
    enableboxes();
    msgContainer.classList.add("hide");
};


//checked boxes according to game one by one
boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        if(turnO){
            //palyerO
            box.innerText = "O";
            turnO = false;
        }else{
            //playerX
            box.innerText ="X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});


// disable other boxes after winner found
const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};


// enable boxes after pressed reset button
const enableboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};


// Display who is winner
const showWinner =(winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
};


//check winner according to conditions
const checkWinner = () => {
    for(let pattern of winPattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
            }
        }
    }
};


//reset button
resetbtn.addEventListener("click", resetGame);





























































