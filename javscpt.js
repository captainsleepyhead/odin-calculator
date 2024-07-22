function add(a, b){
    return +a + +b;
}

function subtract(a, b){
    return +a - +b;
}

function multiple(a, b){
    return +a * +b;
}

function divide(a, b){
    if(+b === 0)
        return "Can't Divide By 0!"
    return +a / +b;
}
/**
 * Mathematical expression - takes 2 operand and perform the appropriate operation. Clear operand and operation variables for next set of inputs
 * parse result to limit the number of charactors to display, so that the content of the container doesn't expand the container
 * @param {*} operator arithmetic operation
 * @param {*} a left operand of the expression
 * @param {*} b right operand of the expression
 * @returns 
 */
function operate(operator, a, b){
    let result;
    switch(operator){
        case '+':
            result = add(a, b);
            break;
        case '-':
            result = subtract(a, b);
            break;
        case '*':
            result = multiple(a, b);
            break;
        case '/':
            result = divide(a, b);
            break;
    }
    num1 = NaN;
    num2 = NaN;
    operatorGlobal = null;
    previousOperator = null;
    if(result === "Can't Divide By 0!"){
        previousAnswer = NaN;
        return result;
    }
    let str = result.toString();
    previousAnswer = result;
    if(result > 999999999999999){
        previousAnswer = NaN;
        return "OverFlow!";
    }
    if(str.includes('.')){
        result = Math.round((result + Number.EPSILON) * 10000000000000) / 10000000000000;
    }
    return result;
}

/**
 * Function takes a str and display it to the div .display container - Responsive CSS
 * @param {*} str display text from the calulator event to be output to the DOM
 */
function display(str){
    let div = document.querySelector('.display');
    div.textContent = str;
}

// INITIALIZE GLOBAL VARIABLES
let operatorGlobal = null;
let num1 = NaN;
let num2 = NaN;
let previousAnswer = NaN;
let previousOperator = null;

let calculator = document.querySelector(".calculator");
/**
 * Listens for mouse clicks - pass the event to the calculator
 */
calculator.addEventListener('click', e => {
    handleCalculatorEvent(e.target.id)
})

/**
 * Listens for keydown event - pass the event to the calculator
 */
document.addEventListener('keydown', e => {
    handleCalculatorEvent(e.key);
})

/**
 * Takes a number in string value from event and place it appropriately in either the right or left operand of an expression
 * @param {*} str number in string form
 * @returns 
 */
function handleNumberCases(str){
    if(Number.isNaN(num1)){
        return num1 = str;
    }else if(operatorGlobal === null){
        if(!Number.isInteger(num1))
            if(num1.length == 16)
                return 'error boss!';
        else if(num1.length == 15)
            return 'error boss!';
        return num1 += str;
    }else if(Number.isNaN(num2)){
        return num2 = str;
    }else{
        if(!Number.isInteger(num2))
            if(num2.length == 16)
                return 'error boss!';
        else if(num2.length == 15)
            return 'error boss!';
        return num2 += str;
    }
}

/**
 * Takes an arithmetic operation in string value from event. Prep operations so that it works well with '=' operations
 * @param {*} str arithmetic in string form
 * @returns 
 */
function handleOperationCase(str){
    if(operatorGlobal !== null){
        previousOperator = operatorGlobal;
    }
    operatorGlobal = str;
    if(!Number.isNaN(num1) && !Number.isNaN(num2)){
        let result = operate(previousOperator, num1, num2);
        if((typeof result) == 'number'){
            num1 = result;
        }else{
            num1 = NaN;
        }
        operatorGlobal = str;
        return result;
    }else if(Number.isNaN(num1) && Number.isNaN(num2)){
        num1 = previousAnswer;
        return operatorGlobal;
    }else{
        return operatorGlobal;
    }
}

/**
 * Takes the extracted needed data from event, which can be numbers, operations, enter, backspace and find the right case to handle input and 
 * takes the result to be pass to the display function
 * @param {*} eventData can be the id button clicked from the mouse click event, or can be the key id from the keydown event
 */
function handleCalculatorEvent(eventData){
    let lastDisplay = document.querySelector(".display");
    lastDisplay = lastDisplay.textContent;
    let displayText = 'error boss!';
    switch(eventData){
        case '+':
            displayText = handleOperationCase('+');
            break;
        case '-':
            displayText = handleOperationCase('-');
            break;
        case '*':
            displayText = handleOperationCase('*');
            break;
        case '/':
            displayText = handleOperationCase('/');
            break;
        case '0':
            displayText = handleNumberCases('0');
            break;
        case '1':
            displayText = handleNumberCases('1');
            break;
        case '2':
            displayText = handleNumberCases('2');
            break;
        case '3':
            displayText = handleNumberCases('3');
            break;
        case '4':
            displayText = handleNumberCases('4');
            break;
        case '5':
            displayText = handleNumberCases('5');
            break;
        case '6':
            displayText = handleNumberCases('6');
            break;
        case '7':
            displayText = handleNumberCases('7');
            break;
        case '8':
            displayText = handleNumberCases('8');
            break;
        case '9':
            displayText = handleNumberCases('9');
            break;
        case '=':
        case 'Enter':
            if(!Number.isNaN(num2)){
                displayText = operate(operatorGlobal, num1, num2);
            }else if(operatorGlobal !== null){
                num2 = num1;
                displayText = operate(operatorGlobal, num1, num2);
            }else
            if(Number.isNaN(num1)){
                num1 = previousAnswer;  
                operatorGlobal = null;
                displayText = num1;
                break;
            }
            break;
        case 'clr':
            num1 = NaN;
            num2 = NaN;
            operatorGlobal = null;
            previousAnswer = NaN;
            displayText = '';
            break;
        case '.':
            if(Number.isNaN(num1)){
                displayText = num1 = '.';
            }else if(operatorGlobal === null){
                if(num1.includes('.'))
                    break;
                displayText = num1 += '.';
            }else if(Number.isNaN(num2)){
                displayText = num2 = '.';
            }else{
                if(num2.includes('.'))
                    break;
                displayText = num2 += '.';
            }
            break;
        case 'Backspace':
        case 'Delete':
            if(!Number.isNaN(num2)){
                displayText = num2 = num2.slice(0, num2.length-1);
            }else if(operatorGlobal !== null){
                operatorGlobal = null;
                displayText = num1 = num1.slice(0, num1.length-1);
            }else if(!Number.isNaN(num1)){
                displayText = num1 = num1.slice(0, num1.length-1);
            }
            break;
        default:
            break;
            
    }
    if(displayText == 'error boss!')
        displayText = lastDisplay;
    if(Number.isNaN(displayText)){
        displayText = "";
    }
    display(displayText);
}

/**
 * Function used for ensuring text in <button> camouflage with background color
 * No logic for the calculator - purely aesthetic
 */
function camouflagePlaceholderText(){
    let btn = document.querySelector(".placeholder");
    let bgColor = window.getComputedStyle(btn).backgroundColor;
    let placeholder = document.querySelectorAll(".placeholder");
    placeholder.forEach(element => {
        element.style.color = bgColor;
    });
}

camouflagePlaceholderText();
