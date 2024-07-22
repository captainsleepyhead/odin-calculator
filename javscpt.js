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
    if(str.includes('.')){
        result = Math.round((result + Number.EPSILON) * 10000000000000) / 10000000000000;
    }else{
        result = Math.round((result + Number.EPSILON) * 100000000000000) / 100000000000000;
    }
    previousAnswer = result;
    return result;
}

function display(str){
    let div = document.querySelector('.display');
    div.textContent = str;
}

let operatorGlobal = null;
let num1 = NaN;
let num2 = NaN;
let previousAnswer = NaN;
let previousOperator = null;

let calculator = document.querySelector(".calculator");
calculator.addEventListener('click', e => {
    handleCalculatorEvent(e.target.id)
})


function camouflagePlaceholderText(){
    let btn = document.querySelector(".placeholder");
    let bgColor = window.getComputedStyle(btn).backgroundColor;
    let placeholder = document.querySelectorAll(".placeholder");
    placeholder.forEach(element => {
        element.style.color = bgColor;
    });
}

camouflagePlaceholderText();

document.addEventListener('keydown', e => {
    handleCalculatorEvent(e.key);
})

function handleNumberCases(str){
    if(Number.isNaN(num1)){
        return num1 = str;
    }else if(operatorGlobal === null){
        if(num1.includes('.'))
            if(num1.length == 16)
                return 'error boss!';
        else if(num1.length == 15)
            return 'error boss!';
        return num1 += str;
    }else if(Number.isNaN(num2)){
        return num2 = str;
    }else{
        if(num2.includes('.'))
            if(num2.length == 16)
                return 'error boss!';
        else if(num2.length == 15)
            return 'error boss!';
        return num2 += str;
    }
}

function handleOperationCase(str){
    if(operatorGlobal !== null){
        previousOperator = operatorGlobal;
    }
    operatorGlobal = str;
    if(!Number.isNaN(num1) && !Number.isNaN(num2)){
        let result = operate(previousOperator, num1, num2);
        if((typeof displayText) == 'number'){
            num1 = displayText;
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
            if(Number.isNaN(num1) || operatorGlobal === null || Number.isNaN(num2)){
                num1 = previousAnswer;  
                operatorGlobal = null;
                displayText = num1;
                break;
            }
            displayText = operate(operatorGlobal, num1, num2);
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