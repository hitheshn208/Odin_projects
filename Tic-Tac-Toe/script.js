const playground = document.querySelector(".playground");
const reset = document.querySelector('.reset-btn');
const dialog1 = document.querySelector('#dialog-box-1');
const dialog2 = document.querySelector('#dialog-box-2');
const p1name = document.querySelector('#playerOneName');
const p2name = document.querySelector('#playerTwoName');
const addPlayerOneBtn = document.querySelector('#addPlayerOneBtn');
const addPlayerTwoBtn = document.querySelector('#addPlayerTwoBtn');
const PlayerOneDisp = document.querySelector('#PlayerOne');
const PlayerTwoDisp = document.querySelector('#PlayerTwo');
const winnerPop = document.querySelector('#winnerpop');
const backdrop = document.querySelector('#backdrop');
const winnername = document.querySelector('#winnername');

let PlayerOneName, PlayerTwoName, PlayerOneSymbol, PlayerTwoSymbol;

window.addEventListener("load", ()=>{
    dialog1.showModal();
});

addPlayerOneBtn.addEventListener("click", ()=>
{
    const selectedRadio = document.querySelector('input[name="choice"]:checked');
    dialog1.close();
    if(!p1name.value)
        p1name.value = "Player 1";

    PlayerOneName = p1name.value;
    PlayerOneSymbol = selectedRadio.value;
    dialog2.showModal();
});

addPlayerTwoBtn.addEventListener("click", ()=>{
    const selectedRadio = document.querySelector('input[name="choice"]:not(:checked)');

    if(!p2name.value)
        p2name.value = "Player 2";

    PlayerTwoName = p2name.value;
    PlayerTwoSymbol = selectedRadio.value;
    dialog2.close();

    PLAYER.getcurrentPlayer().setNameandSymbol(PlayerOneName, PlayerOneSymbol);
    PLAYER.switchturn();
    PLAYER.getcurrentPlayer().setNameandSymbol(PlayerTwoName, PlayerTwoSymbol);
    PLAYER.switchturn();

    GAME.updateScore();
});

/*---------------------------------------------------------------------------------------------------------------------------*/


function Gameboard()
{
    let gameBoard = ["","","","","","","","",""];
    let round = 0;

    function updateDOM()
    {
        for(let i = 0; i<9 ; i++)
        {
            const element = document.querySelector(`#cell-${i}`);
            element.textContent = gameBoard[i];
        }
        round++;
    }
    
    function isOccupied(index)
    {
        if(gameBoard[index])
            return true;
        else
            return false;
    }

    function updateCell(index, symbol) 
    { 
        gameBoard[index] = symbol 
    }

    function resetDOM()
    {
        gameBoard.fill("");

        for(let i = 0; i<9 ; i++)
        {
            const element = document.querySelector(`#cell-${i}`);
            element.textContent = gameBoard[i];
            element.classList.remove("white-font");
        }
        round = 0;
        playground.style.cssText = "pointer-events : auto";
    }

    function isGameDraw()
    {
        if(round === 9)
            return true;
        else
            return false;
    }

    function updateScore()
    {
        PlayerOneDisp.textContent = PlayerOneName +` (${PlayerOneSymbol})`+ ` : ${PLAYER.getScoreofEachPlayer(1)}`;
        PlayerTwoDisp.textContent = PlayerTwoName +` (${PlayerTwoSymbol})`+ ` : ${PLAYER.getScoreofEachPlayer(2)}`;
    }

    return { updateCell, updateDOM, resetDOM, isOccupied, isGameDraw, updateScore }
}

/*--------------------------------------------------------------------------------------------------------------------------*/

function player()
{
    let name;
    let symbol;
    let score = 0;

    function setNameandSymbol(n,s)
    {
        name = n;
        symbol = s;
    }

    function increaseScore()
    {
        score++;
    }
    function resetScore()
    {
        score = 0;
    }
    const getScore = ()=> score;
    const getSymbol = ()=> symbol;
    const getName = ()=> name;

    return {setNameandSymbol, getSymbol, getName, getScore, increaseScore, resetScore}
}

/*--------------------------------------------------------------------------------------------------------------------------*/

function GameControl()
{
    const PlayerOne = player();
    const PlayerTwo = player();

    let Playing = PlayerOne;
    PlayerOneDisp.classList.add('add-border');

    function switchturn(){
        if(Playing == PlayerOne)
        {
            PlayerOneDisp.classList.add('add-border');
            PlayerTwoDisp.classList.remove('add-border');
            Playing = PlayerTwo;
        }
        else
        {
            
            PlayerOneDisp.classList.remove('add-border');
            PlayerTwoDisp.classList.add('add-border');
            Playing = PlayerOne;
        }
    }

    let xMoves = [];
    let oMoves = [];  

    function getcurrentPlayer()
    {
        return Playing;
    } 

    function upDateMove(index)
    {
        if(Playing.getSymbol() == 'X')
            xMoves.push(index);
        else
            oMoves.push(index);
    }  

    function resetMove()
    {
        xMoves.length = 0;
        oMoves.length = 0;
    }

    function isPLayerWinner()
    {
        if(Playing.getSymbol() == 'X')
        {
            if(xMoves.includes(4))
            {
                for(let i = 0; i<4; i++)
                {
                    if(xMoves.includes(WINNER_CHANCES[i][0]) && xMoves.includes(WINNER_CHANCES[i][1]) && xMoves.includes(WINNER_CHANCES[i][2]))
                        return true;
                }

            }

            for(let i =4; i<8; i++)
            {
                if(xMoves.includes(WINNER_CHANCES[i][0]) && xMoves.includes(WINNER_CHANCES[i][1]) && xMoves.includes(WINNER_CHANCES[i][2]))
                    return true;
            }

        }
        else
        {
            if(oMoves.includes(4))
            {
                for(let i = 0; i<4; i++)
                {
                    if(oMoves.includes(WINNER_CHANCES[i][0]) && oMoves.includes(WINNER_CHANCES[i][1]) && oMoves.includes(WINNER_CHANCES[i][2]))
                        return true;
                }

            }

            for(let i =4; i<8; i++)
            {
                if(oMoves.includes(WINNER_CHANCES[i][0]) && oMoves.includes(WINNER_CHANCES[i][1]) && oMoves.includes(WINNER_CHANCES[i][2]))
                    return true;
            }
        }
    }


    function getScoreofEachPlayer(num)
    {
        if(num === 1)
            return PlayerOne.getScore();
        else
            return PlayerTwo.getScore();
    }

    function setScoreToZero()
    {
        PlayerOne.resetScore();
        PlayerTwo.resetScore();
    }

    return { switchturn, getcurrentPlayer, upDateMove, resetMove, isPLayerWinner, getScoreofEachPlayer, setScoreToZero};
}
/*-----------------------------------------------------------------------------*/

const GAME = Gameboard();
const PLAYER = GameControl();
const WINNER_CHANCES = [ [0,4,8], [2,4,6], [3,4,5], [1,4,7], [0,1,2], [6,7,8], [0,3,6], [2,5,8] ];

/*-----------------------------------------------------------------------------*/


playground.addEventListener("click", (e)=>{

    let index = parseInt((e.target.id).split("-")[1]);

    if( isNaN(index) )
        return;

    if(GAME.isOccupied(index))  //Checks if the cell is already occupied
        return;

    const cell = document.querySelector(`#${e.target.id}`);

    if(PLAYER.getcurrentPlayer().getSymbol() === 'X')
        cell.classList.add('pop','white-font');       
    else
        cell.classList.add('pop');     //Adding animation

    cell.addEventListener("animationend", ()=> {cell.classList.remove('pop');} )
       
    GAME.updateCell(index, PLAYER.getcurrentPlayer().getSymbol());
    PLAYER.upDateMove(index);
    GAME.updateDOM();

    if(PLAYER.isPLayerWinner())
    {
        playground.style.cssText = "pointer-events : none";
        PLAYER.getcurrentPlayer().increaseScore();
        setTimeout(()=>{
            winnername.textContent = `${PLAYER.getcurrentPlayer().getName()} wins!`;
            winnerPop.style.display = "flex";
            backdrop.style.display = "block";
            
        },500);

        return;
    }
    else if(GAME.isGameDraw())
    {
        playground.style.cssText = "pointer-events : none";   

        setTimeout(()=>{
            winnername.textContent = `It's a draw!`;
            winnerPop.style.display = "flex";
            backdrop.style.display = "block";
            GAME.resetDOM();
            PLAYER.resetMove();
            PLAYER.switchturn();
        },500);
        return;
    }
    PLAYER.switchturn();
    
});

reset.addEventListener("click", ()=>{
    GAME.resetDOM();
    PLAYER.resetMove();
    PLAYER.setScoreToZero();
    GAME.updateScore();
})

document.addEventListener("click", ()=>{
    
    if(winnername.textContent !== "")
    {   
        GAME.resetDOM();
        PLAYER.resetMove();
        GAME.updateScore();
        PLAYER.switchturn();
        winnername.textContent = "";
        winnerPop.style.display = "none";
        backdrop.style.display = "none";
        
    }
})