const displayHistory    = document.getElementById('display-input');
const displayInput      = document.getElementById('display-current');
const numberBtns        = document.querySelectorAll('.number');
const operatorBtns      = document.querySelectorAll('.operator');

const decimalBtn        = document.querySelector('#decimal');
const clearBtn          = document.querySelector('#clear');
const clearEntryBtn     = document.querySelector('#clear-entry');
const equalBtn          = document.querySelector('#equals');

let firstOperand = '';
let secondOperand = '';
let operator = '';
let operatorOn = false;

function clearDisplayInput() {
    displayInput.textContent = '';
    operatorOn = false;
}


function clearAll() {
    displayHistory.textContent = '';
    displayInput.textContent = '0';
    firstOperand = '';
    secondOperand = '';
    operator = '';
}


clearBtn.addEventListener('click', () => clearAll() );
clearEntryBtn.addEventListener('click', () => displayInput.textContent = '0');

numberBtns.forEach(button => {
    button.addEventListener('click', () => displayAddNumber(button.textContent))
});

function displayAddNumber(number) {
    if(displayInput.textContent === '0' || operatorOn){
        clearDisplayInput()
    }
    displayInput.textContent += number;
}


decimalBtn.addEventListener('click', () => displayAddDecimal() );

function displayAddDecimal() {
    if(displayInput.textContent === ''){
        displayInput.textContent = '0.';
    } 
    else if(!displayInput.textContent.includes(".")){
        displayInput.textContent += '.';
    }
}

equalBtn.addEventListener('click', () => evaluate(equalBtn.textContent) );
operatorBtns.forEach(button => {
    button.addEventListener('click', () => evaluate(button.textContent))
});


// TODO
function evaluate(buttonValue){
    if (operator === '' && buttonValue === '=')
    {
        firstOperand = displayInput.textContent;
        displayHistory.textContent = `${firstOperand} ${buttonValue}`;
        displayInput.textContent = '';
    }
    else if (buttonValue === '=') {
        if(!secondOperand) secondOperand = displayInput.textContent;
        displayHistory.textContent = `${firstOperand} ${operator} ${secondOperand} ${buttonValue}`;
        firstOperand = operate(firstOperand, secondOperand, operator)
        displayInput.textContent = firstOperand;
    }
    else if(operator === '')
    {
        firstOperand = displayInput.textContent;
        operator = buttonValue;
        displayHistory.textContent = `${firstOperand} ${operator}`;
        displayInput.textContent = firstOperand;
        operatorOn = true;
    }
    else
    {
        secondOperand = displayInput.textContent;                
        displayHistory.textContent = ` ${firstOperand} ${operator}`;
        firstOperand = operate(firstOperand, secondOperand, operator);
        displayInput.textContent = firstOperand;
        operatorOn = true;
    }
}


function operate(firstOperand, secondOperand, operator){
    const a = parseFloat(firstOperand);
    const b = parseFloat(secondOperand);
    let result = "Err";
    if(!isNaN(a) && !isNaN(b)){
        switch (operator) {
            case '+':
                result = add(a,b);
                break;
            case '-':
                result = subtract(a,b);
                break;
            case 'x':
                result = multiply(a,b);
                break;
            case '÷':
                result = divide(a,b);
                break;
            default:
                result = "Err";
          }
    }
    return result;
}


function add(a,b) {
	return a + b;
};

function subtract(a,b) {
	return a - b;
};

function multiply(a,b) {
	return a * b;
};

function divide(a,b) {
    return a / b;
};

function power(a,b) {
  return a**b;
};

function factorial(a) {
  let res = 1;
  for(let i=1; i <= a; i++){
    res *= i;
  }
  return res;
};