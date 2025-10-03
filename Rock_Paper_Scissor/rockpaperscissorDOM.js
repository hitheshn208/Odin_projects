const body = document.querySelector("body");

const humanCard = document.querySelector("#humancard");
const computerCard = document.querySelector("#computercard");

const humanCardImage = document.querySelector(".humanchoicecard");
const computerCardImage = document.querySelector(".computerchoicecard");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const miniCards = document.querySelectorAll(".minicards");

const instruction = document.querySelector("#instruction");

const choice = document.querySelector(".choosingcards");

const humanscorecard = document.querySelector("#humanscorecard");
const computerscorecard = document.querySelector("#computerscorecard");

const dialogBox = document.querySelector(".dialoge-box");
const winnerannouncement = document.querySelector("#winner-announcement");
const dialogBoxContent = document.querySelector(".dialoge-box-content");

const toggleBtn = document.querySelector("#darkcheck");

let humanscore = 0, computerscore = 0; 
computerscorecard.innerHTML = computerscore;
humanscorecard.innerHTML = humanscore;



let counter = 1;
instruction.textContent = `Round ${counter} : Make your Choice`;

let n =1000;

//Pre loading the images

  // List all your game images
  const imagesToPreload = [
    'computerpaper.png',
    'computerrock.png',
    'computerscissor.png',
    'paperhuman.png',
    'rockhuman.png',
    'scissorshuman.png',
    'vs1.png'
  ];

  const preloadedImages = [];

  window.addEventListener('load', () => {
    imagesToPreload.forEach(src => {
      const img = new Image();
      img.src = src;
      preloadedImages.push(img);
    });
    console.log('All game images preloaded!');
  });




choice.addEventListener("click", (e)=>{

//Choosing the card using event delegation
    let humanChoice;  
    
    humanCardImage.classList.remove("winninganimation");
    computerCardImage.classList.remove("winninganimation");

//Diabling the choice cards 
    choice.style.pointerEvents = "none";
    choice.style.opacity = "0.5";

    switch (e.target.id)
    {
        case "rock" :   console.log("Rock");

                        humanCardImage.classList.add("rotation-animation");

                        setTimeout(()=>{
                            humanCardImage.style.cssText = "background-image: url(rockhuman.png);"
                        },350);

                        setTimeout(()=>{
                        humanCardImage.classList.remove("rotation-animation");
                        },500);

                        rock.classList.add("choosen");
                        paper.classList.remove("choosen"); 
                        scissor.classList.remove("choosen"); 
                        humanChoice = 0;
                        break;

        case "paper" :  console.log("Paper");

                         humanCardImage.classList.add("rotation-animation");

                         setTimeout(()=>{
                         humanCardImage.style.cssText = "background-image: url(paperhuman.png);"
                        },350);

                        setTimeout(()=>{
                        humanCardImage.classList.remove("rotation-animation");
                        },1000);
            
                        paper.classList.add("choosen"); 
                        rock.classList.remove("choosen");
                        scissor.classList.remove("choosen"); 
                        humanChoice = 1;
                        break;

        case "scissor": console.log("Scissor");
                        humanCardImage.classList.add("rotation-animation");

                        setTimeout(()=>{
                         humanCardImage.style.cssText = "background-image: url(scissorshuman.png);"
                        },350);

                        setTimeout(()=>{
                        humanCardImage.classList.remove("rotation-animation");
                        },1000);
            

                        scissor.classList.add("choosen"); 
                        rock.classList.remove("choosen");
                        paper.classList.remove("choosen"); 
                        humanChoice = 2;
                        break;
        
        default : 
                    choice.style.pointerEvents = "auto";
                    choice.style.opacity = "1";
                    return;
    }

    //After selection computer chooses it's choice

    let computerChoice = computerselection();

    switch(computerChoice)
    {
        case 0: console.log("Computer chose rock");

                computerCardImage.classList.add("rotation-animation");

                setTimeout(()=>{
                        computerCardImage.style.cssText = "background-image: url(computerrock.png);"
                },350);

                setTimeout(()=>{
                        computerCardImage.classList.remove("rotation-animation");
                },1000);
            
                break;

        case 1: console.log("Computer chose paper");

                computerCardImage.classList.add("rotation-animation");

                setTimeout(()=>{
                        computerCardImage.style.cssText = "background-image: url(computerpaper.png);"
                },350);

                setTimeout(()=>{
                        computerCardImage.classList.remove("rotation-animation");
                },1000);

                break;

        case 2: console.log("Computer chose scissors");
                 computerCardImage.classList.add("rotation-animation");

                setTimeout(()=>{
                        computerCardImage.style.cssText = "background-image: url(computerscissor.png);"
                },350);

                setTimeout(()=>{
                        computerCardImage.classList.remove("rotation-animation");
                },1000);

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
        computerCardImage.style.cssText = "background-image: none;"
        humanCardImage.style.cssText = "background-image: none;"
        
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
          setTimeout(() => {
             instruction.textContent = `Round ${counter} was a tie!! Play Again`;
          }, 1000);
           n = 2000;
           counter --; 
    }
    else if ( (hinput === 0 && cinput === 1) || (hinput === 1 && cinput === 2) || (hinput === 2 && cinput === 0) )
    {
        computerScoreUpdation();
        n = 2500;
    }
    else
    {
        humanScoreUpdation();
        n= 2500;
    }
}


function computerScoreUpdation()
{
        console.log("Computer Scores");
        computerscore++ ;
        
        setTimeout(()=>{
        computerCardImage.classList.add("winninganimation");
        computerscorecard.innerHTML = computerscore;
        instruction.textContent = `Computer Won Round ${counter} !!`;
        },1000);
}


function humanScoreUpdation()
{
        console.log("Human scores");
        humanscore++ ;
        
        setTimeout(()=>{
        humanCardImage.classList.add("winninganimation");
        humanscorecard.innerHTML = humanscore;
        instruction.textContent = `You Won Round ${counter} !!`;
        },1000);
        
        
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


toggleBtn.addEventListener("change", (e)=>
{
    if(e.target.checked)
    {
        body.classList.add("dark-mode");
        humanCardImage.classList.add("dark-theme-card");
        computerCardImage.classList.add("dark-theme-card");
        miniCards.forEach(element => {
            element.classList.add("dark-theme-card");
        });
        dialogBoxContent.classList.add("dark-theme-dialoge-box"); 
    }
    else
    {
        body.classList.remove("dark-mode");
        humanCardImage.classList.remove("dark-theme-card");
        computerCardImage.classList.remove("dark-theme-card");
        miniCards.forEach(element => {
            element.classList.remove("dark-theme-card");
        });
        dialogBoxContent.classList.remove("dark-theme-dialoge-box"); 
    }
});