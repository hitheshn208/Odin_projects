const display = document.querySelector('.display');

const button = document.querySelectorAll('.button');

const keypad = document.querySelector('.keypad');

const addbtn = document.getElementById('+');
const subtractbtn = document.getElementById('-');
const dividebtn = document.getElementById('/');
const multiplybtn = document.getElementById('*');



let operator_used = "";
let op1, op2;
let toPerform = "";
let isCalculated = false;

/*--------------------------------------------------------------------------------------Keyboard-------------------------------------------------------------------------------*/

document.addEventListener("keydown", (e)=>
{
    console.log(e.key);
    mainControl(e.key);
});

/*-------------------------------------------------------------------------------On screen Keypad----------------------------------------------------------------------------------*/

keypad.addEventListener('click', (e)=>{
    console.log(e.target.id);
    mainControl(e.target.id);
})


/*---------------------------------------------------------------------------- Functions -----------------------------------------------------------------------------------*/

function mainControl(e)
{
    if(isCalculated)
    {
        isCalculated = false;
        display.textContent = "";
    }

    switch (operator_used) {                                                    //Checks if the operator was used and clears the input field for 2nd operand

        case "+":
            op1 = parseInt(display.textContent);
            display.textContent = "";
            addbtn.style.opacity = 1;
            operator_used = "";
            break;

        case "-":
            op1 = parseInt(display.textContent);
            display.textContent = "";
            subtractbtn.style.opacity = 1;
            operator_used = "";
            break;

        case "*":
            op1 = parseInt(display.textContent);
            display.textContent = "";
            multiplybtn.style.opacity = 1;
            operator_used = "";
            break;

        case "/":
            op1 = parseInt(display.textContent);
            display.textContent = "";
            dividebtn.style.opacity = 1;
            operator_used = "";
            break;
    }

    switch(e) {

        case "+"    :   console.log("Add");
                        addbtn.style.opacity = 0.5;
                        operator_used = "+";
                        toPerform = "addition";
                        break;

        case "-"    :   console.log("Subtract");
                        subtractbtn.style.opacity = 0.5;
                        operator_used = "-";
                        toPerform = "subtraction";
                        break;

        case "*"    :   console.log("Multiply");
                        multiplybtn.style.opacity = 0.5;
                        operator_used = "*";
                        toPerform = "multiplication";
                        break;

        case "/"    :   console.log("Divide");
                        dividebtn.style.opacity = 0.5;
                        operator_used = "/";
                        toPerform = "division";
                        break;

        case "Enter":   performCalculation(toPerform);
                        break;

        case "Backspace" :  display.textContent = display.textContent.slice(0,-1);
                            return;
                            
        case "AC"       : display.textContent = "";
                            op1= NaN;
                            op2 = NaN;
                            operator_used = "";
                            toPerform = "";
                            return;
    }

    if(isNaN(parseInt(e))) //Does not populate the display if the entered key is not a number (NaN)
    {
        return;
    }

    display.textContent += parseInt(e); //Populate the input field

}

function performCalculation(toPerform)
{
    switch(toPerform)
        {
            case "addition":
                op2= parseInt(display.textContent);
                display.textContent = Addition(op1,op2);
                toPerform = "";
                break;
            
            case "subtraction" :
                op2= parseInt(display.textContent);
                display.textContent =Subtraction(op1,op2);
                toPerform = "";
                break;

            case "multiplication" :
                op2= parseInt(display.textContent);
                display.textContent = Multiplication(op1,op2);
                toPerform = "";
                break;

            case "division" :
                op2= parseInt(display.textContent);
                display.textContent = Division(op1,op2);
                toPerform = "";
                break;

            default :   console.log("Entered default case of switch in performCalculation");
                        return;
        }
}

function Addition(a,b)
{
    isCalculated = true;
    return a+b;
}

function Subtraction(a,b)
{
    isCalculated = true;
    return a-b;
}

function Multiplication(a,b)
{
    isCalculated = true;
    return a*b;
}

function Division(a,b)
{
    isCalculated = true;
    if( b === 0 )
    {
        return "Error!!!";
    }
    else
        return (a/b).toFixed(3);
}