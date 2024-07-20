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
    previousAnswer = result;
    return result;
}

function display(str){
    let div = document.querySelector('.display');
    div.textContent = str;
    // if( Number(div.textContent) != Nan ){
    //     if(Number(str)!= NaN){
    //         div.textContent += str;
    //     }else{
    //         div.textContent = str;
    //     }
    // }else{
    //     div.textContent = str;
    // }
}

let operatorGlobal = null;
let num1 = NaN;
let num2 = NaN;
let previousAnswer = NaN;
let calculator = document.querySelector(".calculator");
calculator.addEventListener('click', e => {
    let lastDisplay = document.querySelector(".display");
    lastDisplay = lastDisplay.textContent;
    let displayText = 'error boss!';
    switch(e.target.id){
        case '+':
            operatorGlobal = '+';
            if(!Number.isNaN(num1) && !Number.isNaN(num2)){
                displayText = operate(operatorGlobal, num1, num2);
                if((typeof displayText) == 'number'){
                    num1 = displayText;
                }
                operatorGlobal = '+';
            }else if(Number.isNaN(num1) && Number.isNaN(num2)){
                num1 = previousAnswer;
                displayText = operatorGlobal;
            }else
                displayText = operatorGlobal;
            break;
        case '-':
            operatorGlobal = '-';
            if(!Number.isNaN(num1) && !Number.isNaN(num2)){
                displayText = operate(operatorGlobal, num1, num2);
                if((typeof displayText) == 'number'){
                    num1 = displayText;
                }
                operatorGlobal = '-';
            }else if(Number.isNaN(num1) && Number.isNaN(num2)){
                num1 = previousAnswer;
                displayText = operatorGlobal;
            }else
                displayText = operatorGlobal;
            break;
        case '*':
            operatorGlobal = '*';
            if(!Number.isNaN(num1) && !Number.isNaN(num2)){
                displayText = operate(operatorGlobal, num1, num2);
                if((typeof displayText) == 'number'){
                    num1 = displayText;
                }
                operatorGlobal = '*';
            }else if(Number.isNaN(num1) && Number.isNaN(num2)){
                num1 = previousAnswer;
                displayText = operatorGlobal;
            }else
                displayText = operatorGlobal;
            break;
        case '/':
            operatorGlobal = '/';
            if(!Number.isNaN(num1) && !Number.isNaN(num2)){
                displayText = operate(operatorGlobal, num1, num2);
                if((typeof displayText) == 'number'){
                    num1 = displayText;
                }
                operatorGlobal = '/';
            }else if(Number.isNaN(num1) && Number.isNaN(num2)){
                num1 = previousAnswer;
                displayText = operatorGlobal;
            }else
                displayText = operatorGlobal;
            break;
        case '0':
            if(Number.isNaN(num1)){
                displayText = num1 = '0';
            }else if(operatorGlobal === null){
                displayText = num1 += '0';
            }else if(Number.isNaN(num2)){
                displayText = num2 = '0';
            }else{
                displayText = num2 += '0';
            }
            break;
        case '1':
            if(Number.isNaN(num1)){
                displayText = num1 = '1';
            }else if(operatorGlobal === null){
                displayText = num1 += '1';
            }else if(Number.isNaN(num2)){
                displayText = num2 = '1';
            }else{
                displayText = num2 += '1';
            }
            break;
        case '2':
            if(Number.isNaN(num1)){
                displayText = num1 = '2';
            }else if(operatorGlobal === null){
                displayText = num1 += '2';
            }else if(Number.isNaN(num2)){
                displayText = num2 = '2';
            }else{
                displayText = num2 += '2';
            }
            break;
        case '3':
            if(Number.isNaN(num1)){
                displayText = num1 = '3';
            }else if(operatorGlobal === null){
                displayText = num1 += '3';
            }else if(Number.isNaN(num2)){
                displayText = num2 = '3';
            }else{
                displayText = num2 += '3';
            }
            break;
        case '4':
            if(Number.isNaN(num1)){
                displayText = num1 = '4';
            }else if(operatorGlobal === null){
                displayText = num1 += '4';
            }else if(Number.isNaN(num2)){
                displayText = num2 = '4';
            }else{
                displayText = num2 += '4';
            }
            break;
        case '5':
            if(Number.isNaN(num1)){
                displayText = num1 = '5';
            }else if(operatorGlobal === null){
                displayText = num1 += '5';
            }else if(Number.isNaN(num2)){
                displayText = num2 = '5';
            }else{
                displayText = num2 += '5';
            }
            break;
        case '6':
            if(Number.isNaN(num1)){
                displayText = num1 = '6';
            }else if(operatorGlobal === null){
                displayText = num1 += '6';
            }else if(Number.isNaN(num2)){
                displayText = num2 = '6';
            }else{
                displayText = num2 += '6';
            }
            break;
        case '7':
            if(Number.isNaN(num1)){
                displayText = num1 = '7';
            }else if(operatorGlobal === null){
                displayText = num1 += '7';
            }else if(Number.isNaN(num2)){
                displayText = num2 = '7';
            }else{
                displayText = num2 += '7';
            }
            break;
        case '8':
            if(Number.isNaN(num1)){
                displayText = num1 = '8';
            }else if(operatorGlobal === null){
                displayText = num1 += '8';
            }else if(Number.isNaN(num2)){
                displayText = num2 = '8';
            }else{
                displayText = num2 += '8';
            }
            break;
        case '9':
            if(Number.isNaN(num1)){
                displayText = num1 = '9';
            }else if(operatorGlobal === null){
                displayText = num1 += '9';
            }else if(Number.isNaN(num2)){
                displayText = num2 = '9';
            }else{
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
        default:
            break;
            
    }
    if(displayText == 'error boss!')
        displayText = lastDisplay;
    display(displayText);
})

// let btn = document.querySelector(".placex`older");
// let bgColor = window.getComputedStyle(btn).backgroundColor;
// let placeholder = document.querySelectorAll(".placeholder");
// placeholder.forEach(element => {
//     element.style.color = bgColor;
// });
function camouflagePlaceholderText(){
    let btn = document.querySelector(".placeholder");
    let bgColor = window.getComputedStyle(btn).backgroundColor;
    let placeholder = document.querySelectorAll(".placeholder");
    placeholder.forEach(element => {
        element.style.color = bgColor;
    });
}

camouflagePlaceholderText();