const buttons = document.querySelectorAll('.btn');
const input = document.getElementById('calculator-input');

console.table(buttons);
console.log(input);

// Loop through all the calculator buttons and add an onclick event listener to each one
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonValue = button.textContent;
    input.value += buttonValue;
  });
});


const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(a) {
  return a.reduce((total,current) => total + current, 0);
};

const multiply = function(a) {
  return a.reduce((accumlator, current) => accumlator * current, 1);
};

const power = function(a,b) {
  return a**b;
};

const factorial = function(a) {
  let res = 1;
  for(let i=1; i <= a; i++){
    res *= i;
  }
  return res;
};