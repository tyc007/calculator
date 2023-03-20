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


// Loop through all the calculator buttons and add an onclick event listener to each one
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonValue = button.textContent;
    
    if (!isNaN(buttonValue) || buttonValue === '.') {
        displayInput.textContent += buttonValue;
    }
    });
});

clearBtn.addEventListener('click', () => {
    displayInput.textContent = '';
    firstOperand = '';
    secondOperand = '';
    operator = '';
});

equalBtn.addEventListener('click', () => {
    firstOperand = input.value;
});


function operate(firstOperand, secondOperand, operator){
    a = parseFloat(firstOperand);
    b = parseFloat(secondOperand);
    console.log(b)
    switch (operator) {
        case '+':
            displayInput.value = add(a,b);
            break;
        case '-':
            displayInput.value = subtract(a,b);
            break;
        case 'x':
            displayInput.value = multiply(a,b);
            break;
        case '÷':
            displayInput.value = divide(a,b);
            break;
      }
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