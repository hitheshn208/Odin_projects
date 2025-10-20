const display = document.querySelector('.display');
const keypad = document.querySelector('.keypad');

const addbtn = document.getElementById('+');
const subtractbtn = document.getElementById('-');
const dividebtn = document.getElementById('/');
const multiplybtn = document.getElementById('*');


let ops;
let expression = null;
let isOperatorUsed = false, isInvalid = false, isEvaluated = false;
display.textContent = null;

/*--------------------------------------------------------------------------------------Keyboard-------------------------------------------------------------------------------*/

document.addEventListener("keydown", (e)=>{
    console.log(e.key);
    mainControl(e.key);
});

/*-------------------------------------------------------------------------------On screen Keypad----------------------------------------------------------------------------------*/

keypad.addEventListener('click', (e)=>{
    console.log(e.target.id);
    mainControl(e.target.id);
    e.target.blur(); // Remove focus from the clicked button
});

/*---------------------------------------------------------------------------- Functions -----------------------------------------------------------------------------------*/

function mainControl(e)
{
    if(isInvalid)
    {
        isInvalid = false;
        display.textContent = "";
    }

    if(isEvaluated)
    {
        isEvaluated = false;
        display.textContent = "";
    }

    switch(e) {

        case "+"    :   console.log("Add");

                        if(isOperatorUsed)
                        {
                            isOperatorUsed = false;
                            evaluation();

                            if(isInvalid)
                                return;
                        }

                        display.textContent += "+";
                        isOperatorUsed = true;
                        break;

        case "-"    :   console.log("Subtract");

                        if(isOperatorUsed)
                        {
                            isOperatorUsed = false;
                            evaluation();

                            if(isInvalid)
                                return;
                        }

                        display.textContent += "-";
                        isOperatorUsed = true;
                        break;

        case "*"    :   console.log("Multiply");

                        if(isOperatorUsed)
                        {
                            isOperatorUsed = false;
                            evaluation();

                            if(isInvalid)
                                return;
                        }

                        display.textContent += "*";
                        isOperatorUsed = true;
                        break;

        case "/"    :   console.log("Divide");

                        if(isOperatorUsed)
                        {
                            isOperatorUsed = false;
                            evaluation();

                            if(isInvalid)
                                return;
                        }
                        display.textContent += "/";
                        isOperatorUsed = true;
                        break;

        case "."    : display.textContent += "."
                        break;

        case "Backspace" :  display.textContent = display.textContent.slice(0,-1);
                            return;
                            
        case "AC"       : display.textContent = "";
                            isOperatorUsed = false;
                            return;

        case "Enter" : evaluation();
                        isEvaluated = true;
                        break;
    }

    if(isNaN(parseFloat(e))) //Does not print on the display if the entered key is not a number (NaN)
    {
        console.log("not a number");
        return;
    }

    display.textContent += parseFloat(e); //Prints in the input field

}

/*---------------------------------------------------------------------Calculation Functions---------------------------------------------------*/

function Addition(a,b)                          //Addition Function
{
    if(isInt(a) && isInt(b))
        return (a+b).toFixed(0);                //if both are integer removes truncating zeros after decimal
    
    return a+b;
}

function Subtraction(a,b)                       //Subtraction Function
{
    if(isInt(a) && isInt(b))
        return (a-b).toFixed(0);                //if both are integer removes truncating zeros after decimal  
    else
        return a-b;
}

function Multiplication(a,b)                   //Multiplication Function
{
    if(isInt(a) && isInt(b))
        return (a*b).toFixed(0);                //if both are integer removes truncating zeros after decimal
    return a*b;
}

function Division(a,b)                         //Division Function
{
    if( b === 0 )
    {
        isInvalid = true;
        return "Cannot Divide by zero";
    }
    else{

        if(isInt((a/b).toFixed(3)))
            return (a/b).toFixed(0);
        else
            return (a/b).toFixed(3);
    }
}

/*---------------------------------------------------------------------------------------------------------------------------------------*/
function isInt(x)
{
    if(x%1 === 0)                          //Checks if the operand has decimal part
        return true;
    else
        return false;
}

function expressionValidator(ops)
{
    if(isNaN(ops[0] + ops[1]) || ops[0] === "" || ops[1] === "")   //Checks for invalid expressions like continuous 2 operators and decimals
    {
        if(ops[0]%1 !== 0 && ops[1]%1 !== 0 )   //isNaN returns true if both Operands have decimal part so second validation
            return true;
        else
            return false;
    }
    else 
        return true;
}


function evaluation()
{

 expression = display.textContent;

        if(expression.includes("+"))
        {
            ops = expression.split("+");

            if(expressionValidator(ops))
            {
                display.textContent = Addition (parseFloat(ops[0]),parseFloat(ops[1]));
            }
            else{
                display.textContent = "Invalid Expression";
                isInvalid = true;
                return;
            }
            ops = [];
        }

        else if( expression.includes("-"))
        {
            ops = expression.split("-");

            if(expressionValidator(ops))
            {
                display.textContent = Subtraction (parseFloat(ops[0]),parseFloat(ops[1]));
            }
            else{
                display.textContent = "Invalid Expression";
                isInvalid = true;
                return;
            }
            ops = [];
        }

        else if( expression.includes("*"))
        {
            ops = expression.split("*");

            if(expressionValidator(ops))
            {
                display.textContent = Multiplication (parseFloat(ops[0]),parseFloat(ops[1]));
            }
            else{
                display.textContent = "Invalid Expression";
                isInvalid = true;
                return;
            }
            ops = [];
        }

        else if( expression.includes("/"))
        {
            ops = expression.split("/");

            if(expressionValidator(ops))
            { 
                display.textContent = Division (parseFloat(ops[0]),parseFloat(ops[1]));
            }
            else{
                display.textContent = "Invalid Expression";
                isInvalid = true;
                return;
            }
            ops = [];
        }
}