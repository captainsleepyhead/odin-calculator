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
        return "Nice try! You can't divide by zero xD";
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
    let lastDisplay = document.querySelector(".display");
    lastDisplay = lastDisplay.textContent;
    let displayText = 'error boss!';
    switch(e.target.id){
        case '+':
            if(operatorGlobal !== null){
                previousOperator = operatorGlobal;
            }
            operatorGlobal = '+';
            if(!Number.isNaN(num1) && !Number.isNaN(num2)){
                displayText = operate(previousOperator, num1, num2);
                if((typeof displayText) == 'number'){
                    num1 = displayText;
                }
                operatorGlobal = '+';
            }else if(Number.isNaN(num1) && Number.isNaN(num2)){
                num1 = previousAnswer;
                displayText = operatorGlobal;
            }else{
                displayText = operatorGlobal;
            }
            break;
        case '-':
            if(operatorGlobal !== null){
                previousOperator = operatorGlobal;
            }
            operatorGlobal = '-';
            if(!Number.isNaN(num1) && !Number.isNaN(num2)){
                displayText = operate(previousOperator, num1, num2);
                if((typeof displayText) == 'number'){
                    num1 = displayText;
                }
                operatorGlobal = '-';
            }else if(Number.isNaN(num1) && Number.isNaN(num2)){
                num1 = previousAnswer;
                displayText = operatorGlobal;
            }else{
                displayText = operatorGlobal;
            }
            break;
        case '*':
            if(operatorGlobal !== null){
                previousOperator = operatorGlobal;
            }
            operatorGlobal = '*';
            if(!Number.isNaN(num1) && !Number.isNaN(num2)){
                displayText = operate(previousOperator, num1, num2);
                // if((typeof displayText) == 'number'){
                //     num1 = displayText;
                // }
                num1 = displayText;
                operatorGlobal = '*';
            }else if(Number.isNaN(num1) && Number.isNaN(num2)){
                num1 = previousAnswer;
                displayText = operatorGlobal;
            }else{
                displayText = operatorGlobal;
            }
            break;
        case '/':
            if(operatorGlobal !== null){
                previousOperator = operatorGlobal;
            }
            operatorGlobal = '/';
            if(!Number.isNaN(num1) && !Number.isNaN(num2)){
                displayText = operate(previousOperator, num1, num2);
                if((typeof displayText) == 'number'){
                    num1 = displayText;
                }
                operatorGlobal = '/';
            }else if(Number.isNaN(num1) && Number.isNaN(num2)){
                num1 = previousAnswer;
                displayText = operatorGlobal;
            }else{
                displayText = operatorGlobal;
            }
            break;
        case '0':
            if(Number.isNaN(num1)){
                displayText = num1 = '0';
            }else if(operatorGlobal === null){
                if(num1.includes('.'))
                    if(num1.length == 16)
                        break;
                else if(num1.length == 15)
                    break;
                displayText = num1 += '0';
            }else if(Number.isNaN(num2)){
                displayText = num2 = '0';
            }else{
                if(num2.includes('.'))
                    if(num2.length == 16)
                        break;
                else if(num2.length == 15)
                    break;
                displayText = num2 += '0';
            }
            break;
        case '1':
            if(Number.isNaN(num1)){
                displayText = num1 = '1';
            }else if(operatorGlobal === null){
                if(num1.includes('.'))
                    if(num1.length == 16)
                        break;
                else if(num1.length == 15)
                    break;
                displayText = num1 += '1';
            }else if(Number.isNaN(num2)){
                displayText = num2 = '1';
            }else{
                if(num2.includes('.'))
                    if(num2.length == 16)
                        break;
                else if(num2.length == 15)
                    break;
                displayText = num2 += '1';
            }
            break;
        case '2':
            if(Number.isNaN(num1)){
                displayText = num1 = '2';
            }else if(operatorGlobal === null){
                if(num1.includes('.'))
                    if(num1.length == 16)
                        break;
                else if(num1.length == 15)
                    break;
                displayText = num1 += '2';
            }else if(Number.isNaN(num2)){
                displayText = num2 = '2';
            }else{
                if(num2.includes('.'))
                    if(num2.length == 16)
                        break;
                else if(num2.length == 15)
                    break;
                displayText = num2 += '2';
            }
            break;
        case '3':
            if(Number.isNaN(num1)){
                displayText = num1 = '3';
            }else if(operatorGlobal === null){
                if(num1.includes('.'))
                    if(num1.length == 16)
                        break;
                else if(num1.length == 15)
                    break;
                displayText = num1 += '3';
            }else if(Number.isNaN(num2)){
                displayText = num2 = '3';
            }else{
                if(num2.includes('.'))
                    if(num2.length == 16)
                        break;
                else if(num2.length == 15)
                    break;
                displayText = num2 += '3';
            }
            break;
        case '4':
            if(Number.isNaN(num1)){
                displayText = num1 = '4';
            }else if(operatorGlobal === null){
                if(num1.includes('.'))
                    if(num1.length == 16)
                        break;
                else if(num1.length == 15)
                    break;
                displayText = num1 += '4';
            }else if(Number.isNaN(num2)){
                displayText = num2 = '4';
            }else{
                if(num2.includes('.'))
                    if(num2.length == 16)
                        break;
                else if(num2.length == 15)
                    break;
                displayText = num2 += '4';
            }
            break;
        case '5':
            if(Number.isNaN(num1)){
                displayText = num1 = '5';
            }else if(operatorGlobal === null){
                if(num1.includes('.'))
                    if(num1.length == 16)
                        break;
                else if(num1.length == 15)
                    break;
                displayText = num1 += '5';
            }else if(Number.isNaN(num2)){
                displayText = num2 = '5';
            }else{
                if(num2.includes('.'))
                    if(num2.length == 16)
                        break;
                else if(num2.length == 15)
                    break;
                displayText = num2 += '5';
            }
            break;
        case '6':
            if(Number.isNaN(num1)){
                displayText = num1 = '6';
            }else if(operatorGlobal === null){
                if(num1.includes('.'))
                    if(num1.length == 16)
                        break;
                else if(num1.length == 15)
                    break;
                displayText = num1 += '6';
            }else if(Number.isNaN(num2)){
                displayText = num2 = '6';
            }else{
                if(num2.includes('.'))
                    if(num2.length == 16)
                        break;
                else if(num2.length == 15)
                    break;
                displayText = num2 += '6';
            }
            break;
        case '7':
            if(Number.isNaN(num1)){
                displayText = num1 = '7';
            }else if(operatorGlobal === null){
                if(num1.includes('.'))
                    if(num1.length == 16)
                        break;
                else if(num1.length == 15)
                    break;
                displayText = num1 += '7';
            }else if(Number.isNaN(num2)){
                displayText = num2 = '7';
            }else{
                if(num2.includes('.'))
                    if(num2.length == 16)
                        break;
                else if(num2.length == 15)
                    break;
                displayText = num2 += '7';
            }
            break;
        case '8':
            if(Number.isNaN(num1)){
                displayText = num1 = '8';
            }else if(operatorGlobal === null){
                if(num1.includes('.'))
                    if(num1.length == 16)
                        break;
                else if(num1.length == 15)
                    break;
                displayText = num1 += '8';
            }else if(Number.isNaN(num2)){
                displayText = num2 = '8';
            }else{
                if(num2.includes('.'))
                    if(num2.length == 16)
                        break;
                else if(num2.length == 15)
                    break;
                displayText = num2 += '8';
            }
            break;
        case '9':
            if(Number.isNaN(num1)){
                displayText = num1 = '9';
            }else if(operatorGlobal === null){
                if(num1.includes('.'))
                    if(num1.length == 16)
                        break;
                else if(num1.length == 15)
                    break;
                displayText = num1 += '9';
            }else if(Number.isNaN(num2)){
                displayText = num2 = '9';
            }else{
                if(num2.includes('.'))
                    if(num2.length == 16)
                        break;
                else if(num2.length == 15)
                    break;
                displayText = num2 += '9';
            }
            break;
        case '=':
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
        case 'backspace':
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
    display(displayText);
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
    let lastDisplay = document.querySelector(".display");
    lastDisplay = lastDisplay.textContent;
    let displayText = 'error boss!';
    switch(e.key){
        case '+':
            if(operatorGlobal !== null){
                previousOperator = operatorGlobal;
            }
            operatorGlobal = '+';
            if(!Number.isNaN(num1) && !Number.isNaN(num2)){
                displayText = operate(previousOperator, num1, num2);
                if((typeof displayText) == 'number'){
                    num1 = displayText;
                }
                operatorGlobal = '+';
            }else if(Number.isNaN(num1) && Number.isNaN(num2)){
                num1 = previousAnswer;
                displayText = operatorGlobal;
            }else{
                displayText = operatorGlobal;
            }
            break;
        case '-':
            if(operatorGlobal !== null){
                previousOperator = operatorGlobal;
            }
            operatorGlobal = '-';
            if(!Number.isNaN(num1) && !Number.isNaN(num2)){
                displayText = operate(previousOperator, num1, num2);
                if((typeof displayText) == 'number'){
                    num1 = displayText;
                }
                operatorGlobal = '-';
            }else if(Number.isNaN(num1) && Number.isNaN(num2)){
                num1 = previousAnswer;
                displayText = operatorGlobal;
            }else{
                displayText = operatorGlobal;
            }
            break;
        case '*':
            if(operatorGlobal !== null){
                previousOperator = operatorGlobal;
            }
            operatorGlobal = '*';
            if(!Number.isNaN(num1) && !Number.isNaN(num2)){
                displayText = operate(previousOperator, num1, num2);
                // if((typeof displayText) == 'number'){
                //     num1 = displayText;
                // }
                num1 = displayText;
                operatorGlobal = '*';
            }else if(Number.isNaN(num1) && Number.isNaN(num2)){
                num1 = previousAnswer;
                displayText = operatorGlobal;
            }else{
                displayText = operatorGlobal;
            }
            break;
        case '/':
            if(operatorGlobal !== null){
                previousOperator = operatorGlobal;
            }
            operatorGlobal = '/';
            if(!Number.isNaN(num1) && !Number.isNaN(num2)){
                displayText = operate(previousOperator, num1, num2);
                if((typeof displayText) == 'number'){
                    num1 = displayText;
                }
                operatorGlobal = '/';
            }else if(Number.isNaN(num1) && Number.isNaN(num2)){
                num1 = previousAnswer;
                displayText = operatorGlobal;
            }else{
                displayText = operatorGlobal;
            }
            break;
        case '0':
            if(Number.isNaN(num1)){
                displayText = num1 = '0';
            }else if(operatorGlobal === null){
                if(num1.includes('.'))
                    if(num1.length == 16)
                        break;
                else if(num1.length == 15)
                    break;
                displayText = num1 += '0';
            }else if(Number.isNaN(num2)){
                displayText = num2 = '0';
            }else{
                if(num2.includes('.'))
                    if(num2.length == 16)
                        break;
                else if(num2.length == 15)
                    break;
                displayText = num2 += '0';
            }
            break;
        case '1':
            if(Number.isNaN(num1)){
                displayText = num1 = '1';
            }else if(operatorGlobal === null){
                if(num1.includes('.'))
                    if(num1.length == 16)
                        break;
                else if(num1.length == 15)
                    break;
                displayText = num1 += '1';
            }else if(Number.isNaN(num2)){
                displayText = num2 = '1';
            }else{
                if(num2.includes('.'))
                    if(num2.length == 16)
                        break;
                else if(num2.length == 15)
                    break;
                displayText = num2 += '1';
            }
            break;
        case '2':
            if(Number.isNaN(num1)){
                displayText = num1 = '2';
            }else if(operatorGlobal === null){
                if(num1.includes('.'))
                    if(num1.length == 16)
                        break;
                else if(num1.length == 15)
                    break;
                displayText = num1 += '2';
            }else if(Number.isNaN(num2)){
                displayText = num2 = '2';
            }else{
                if(num2.includes('.'))
                    if(num2.length == 16)
                        break;
                else if(num2.length == 15)
                    break;
                displayText = num2 += '2';
            }
            break;
        case '3':
            if(Number.isNaN(num1)){
                displayText = num1 = '3';
            }else if(operatorGlobal === null){
                if(num1.includes('.'))
                    if(num1.length == 16)
                        break;
                else if(num1.length == 15)
                    break;
                displayText = num1 += '3';
            }else if(Number.isNaN(num2)){
                displayText = num2 = '3';
            }else{
                if(num2.includes('.'))
                    if(num2.length == 16)
                        break;
                else if(num2.length == 15)
                    break;
                displayText = num2 += '3';
            }
            break;
        case '4':
            if(Number.isNaN(num1)){
                displayText = num1 = '4';
            }else if(operatorGlobal === null){
                if(num1.includes('.'))
                    if(num1.length == 16)
                        break;
                else if(num1.length == 15)
                    break;
                displayText = num1 += '4';
            }else if(Number.isNaN(num2)){
                displayText = num2 = '4';
            }else{
                if(num2.includes('.'))
                    if(num2.length == 16)
                        break;
                else if(num2.length == 15)
                    break;
                displayText = num2 += '4';
            }
            break;
        case '5':
            if(Number.isNaN(num1)){
                displayText = num1 = '5';
            }else if(operatorGlobal === null){
                if(num1.includes('.'))
                    if(num1.length == 16)
                        break;
                else if(num1.length == 15)
                    break;
                displayText = num1 += '5';
            }else if(Number.isNaN(num2)){
                displayText = num2 = '5';
            }else{
                if(num2.includes('.'))
                    if(num2.length == 16)
                        break;
                else if(num2.length == 15)
                    break;
                displayText = num2 += '5';
            }
            break;
        case '6':
            if(Number.isNaN(num1)){
                displayText = num1 = '6';
            }else if(operatorGlobal === null){
                if(num1.includes('.'))
                    if(num1.length == 16)
                        break;
                else if(num1.length == 15)
                    break;
                displayText = num1 += '6';
            }else if(Number.isNaN(num2)){
                displayText = num2 = '6';
            }else{
                if(num2.includes('.'))
                    if(num2.length == 16)
                        break;
                else if(num2.length == 15)
                    break;
                displayText = num2 += '6';
            }
            break;
        case '7':
            if(Number.isNaN(num1)){
                displayText = num1 = '7';
            }else if(operatorGlobal === null){
                if(num1.includes('.'))
                    if(num1.length == 16)
                        break;
                else if(num1.length == 15)
                    break;
                displayText = num1 += '7';
            }else if(Number.isNaN(num2)){
                displayText = num2 = '7';
            }else{
                if(num2.includes('.'))
                    if(num2.length == 16)
                        break;
                else if(num2.length == 15)
                    break;
                displayText = num2 += '7';
            }
            break;
        case '8':
            if(Number.isNaN(num1)){
                displayText = num1 = '8';
            }else if(operatorGlobal === null){
                if(num1.includes('.'))
                    if(num1.length == 16)
                        break;
                else if(num1.length == 15)
                    break;
                displayText = num1 += '8';
            }else if(Number.isNaN(num2)){
                displayText = num2 = '8';
            }else{
                if(num2.includes('.'))
                    if(num2.length == 16)
                        break;
                else if(num2.length == 15)
                    break;
                displayText = num2 += '8';
            }
            break;
        case '9':
            if(Number.isNaN(num1)){
                displayText = num1 = '9';
            }else if(operatorGlobal === null){
                if(num1.includes('.'))
                    if(num1.length == 16)
                        break;
                else if(num1.length == 15)
                    break;
                displayText = num1 += '9';
            }else if(Number.isNaN(num2)){
                displayText = num2 = '9';
            }else{
                if(num2.includes('.'))
                    if(num2.length == 16)
                        break;
                else if(num2.length == 15)
                    break;
                displayText = num2 += '9';
            }
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
    display(displayText);
})