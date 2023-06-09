const buttons = document.querySelectorAll('.btn');
const displayHistory = document.getElementById('display-input');
const displayInput = document.getElementById('display-current');
const addBtn = document.querySelector('#add');
const clearBtn = document.querySelector('#clear');
const equalBtn = document.querySelector('#equals');


// Create variables to store the first operand, operator, and second operand
let firstOperand = '';
let secondOperand = '';
let operator = '';
let total = '';


// Loop through all the calculator buttons and add an onclick event listener to each one
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.textContent;

        if (!isNaN(buttonValue) || buttonValue === '.') {
            displayInput.textContent += buttonValue;
        }
        else{
            evaluate(buttonValue);
        }
    });
});

clearBtn.addEventListener('click', () => {
    displayHistory.textContent = '';
    displayInput.textContent = '';
    firstOperand = '';
    secondOperand = '';
    operator = '';
});

equalBtn.addEventListener('click', () => {
    firstOperand = displayInput.textContent;
    displayHistory.textContent = firstOperand;
    displayInput.textContent = '';
});

function evaluate(buttonValue){
    if (operator === '')
    {
        firstOperand = displayInput.textContent;
        operator = buttonValue;
        displayHistory.textContent = `${firstOperand} ${operator}`;
        displayInput.textContent = '';
    }
    else
    {
        secondOperand = displayInput.textContent;                
        firstOperand = operate(firstOperand, secondOperand, operator);
        displayHistory.textContent = ` ${firstOperand} ${operator}`;
        displayInput.textContent = '';
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
	return a * b;
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