const humanCard = document.querySelector("#humancard");
const computerCard = document.querySelector("#computercard");

const humanCardImage = document.querySelector(".humanchoicecard");
const computerCardImage = document.querySelector(".computerchoicecard");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");

const instruction = document.querySelector("#instruction");

const choice = document.querySelector(".choosingcards");

const humanscorecard = document.querySelector("#humanscorecard");
const computerscorecard = document.querySelector("#computerscorecard");

const dialogBox = document.querySelector(".dialoge-box");
const winnerannouncement = document.querySelector("#winner-announcement");

let humanscore = 0, computerscore = 0; 
computerscorecard.innerHTML = computerscore;
humanscorecard.innerHTML = humanscore;

let counter = 1;
instruction.textContent = `Round ${counter} : Make your Choice`;

let n =1000;



choice.addEventListener("click", (e)=>{

//Choosing the card using event delegation
    let humanChoice;  
    
//Diabling the choice cards 
    choice.style.pointerEvents = "none";
    choice.style.opacity = "0.5";

    switch (e.target.id)
    {
        case "rock" :   console.log("Rock");
                        humanCardImage.style.cssText = "background-image: url(rockhuman.png);"
                        
                        rock.classList.add("choosen");
                        paper.classList.remove("choosen"); 
                        scissor.classList.remove("choosen"); 
                        humanChoice = 0;
                        break;

        case "paper" :  console.log("Paper");
                        humanCardImage.style.cssText = "background-image: url(paperhuman.png);"
            
                        paper.classList.add("choosen"); 
                        rock.classList.remove("choosen");
                        scissor.classList.remove("choosen"); 
                        humanChoice = 1;
                        break;

        case "scissor": console.log("Scissor");
                        humanCardImage.style.cssText = "background-image: url(scissorshuman.png);"

                        scissor.classList.add("choosen"); 
                        rock.classList.remove("choosen");
                        paper.classList.remove("choosen"); 
                        humanChoice = 2;
                        break;
        
        default : return;
    }

    //After selection computer chooses it's choice

    let computerChoice = computerselection();

    switch(computerChoice)
    {
        case 0: console.log("Computer chose rock");
                computerCardImage.style.cssText = "background-image: url(computerrock.png);"
                break;

        case 1: console.log("Computer chose paper");
                computerCardImage.style.cssText = "background-image: url(computerpaper.png);"
                break;

        case 2: console.log("Computer chose scissors");
                computerCardImage.style.cssText = "background-image: url(computerscissor.png);"
                break;
    }

    //Playing the game
    playround(humanChoice, computerChoice);


    counter++; //Incrementing the round number

    
    if(counter>5)
        {
            setTimeout(()=>{
            
            dialogBox.style.display = "flex";
            winnertext();
            choice.style.pointerEvents = "auto";
            choice.style.opacity = "1";
            
            },1500);

            return;
        }


//Enabling the choice cards and updating the round number
    setTimeout(()=>{

        instruction.textContent = `Round ${counter} : Make your Choice`;
        choice.style.pointerEvents = "auto";
        choice.style.opacity = "1";
        
        if(humanChoice === 0)
            rock.classList.remove("choosen");
        else if(humanChoice === 1)
            paper.classList.remove("choosen"); 
        else
            scissor.classList.remove("choosen"); 
    },n);

});


function computerselection(){
    let choice = Math.floor(Math.random()*3);
    return choice;
}



function playround(hinput, cinput)
{
    //0 = rock , 1 = paper , 2 = scissors
    if (hinput === cinput)
    {
           instruction.textContent = `Round ${counter} was a tie!! Play Again`;
           n = 1000;
           counter --; 
    }
    else if ( (hinput === 0 && cinput === 1) || (hinput === 1 && cinput === 2) || (hinput === 2 && cinput === 0) )
    {
        computerScoreUpdation();
        n = 1500;
    }
    else
    {
        humanScoreUpdation();
        n= 1500;
    }
}


function computerScoreUpdation()
{
        console.log("Computer Scores");
        computerscore++ ;
        computerCardImage.classList.remove("winninganimation");
        
        setTimeout(()=>{
        computerCardImage.classList.add("winninganimation");
        },0);

        computerscorecard.innerHTML = computerscore;
        instruction.textContent = `Computer Won Round ${counter} !!`;
    
}


function humanScoreUpdation()
{
        console.log("Human scores");
        humanscore++ ;
        humanCardImage.classList.remove("winninganimation");
        
        setTimeout(()=>{
        humanCardImage.classList.add("winninganimation");
        },0);
        
        humanscorecard.innerHTML = humanscore;
        instruction.textContent = `You Won Round ${counter} !!`;
}


function reset()
{
    computerscorecard.innerHTML = 0;
    humanscorecard.innerHTML = 0;
    computerCardImage.style.cssText = "background-image: none;"
    humanCardImage.style.cssText = "background-image: none;"
    counter = 1;
    rock.classList.remove("choosen");
    paper.classList.remove("choosen"); 
    scissor.classList.remove("choosen"); 
    humanscore = 0;
    computerscore = 0;
}

document.querySelector("#Playagain").addEventListener("click", ()=>{
    reset();
    dialogBox.style.display = "none";
    instruction.textContent = `Round ${counter} : Make your Choice`;
})

function winnertext()
{
    if(humanscore > computerscore)
    {
        winnerannouncement.innerHTML = `You won the game !!`;
    }
    else
    {
        winnerannouncement.innerHTML = `Computer won the game !!`;
    }
}