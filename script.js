const numbers = document.querySelectorAll('.number-button');
const operators = document.querySelectorAll('.operator-button');
const displayNumber = document.getElementById('display');
let num1 = '';
let num2 = '';
let operator = '';
document.getElementById('equalsButton').addEventListener('click', (e) =>{
    e.preventDefault();
    performCalculation(operator);
});

numbers.forEach((number) => {
  number.addEventListener('click', (e) => {
    e.preventDefault();
    if (!operator) {
      num1 += e.target.value;
      displayNumber.textContent = num1;
    }
    if (num1 && operator){
      num2 += e.target.value;
      displayNumber.textContent = num2;
    }
    else if (num1 && num2 && operator) { 
      num2 += e.target.value;
      displayNumber.textContent = num2;     
    }
  });
});

operators.forEach((operatorValue) => {
  operatorValue.addEventListener('click', (e) => {
    e.preventDefault();
    if (num1){
      operator = e.target.value;
      displayNumber.textContent = operator;
     } 
    if (num1 && num2){
      let nextOperator = e.target.value;
      runContinuousOperation(nextOperator);
    }   
  });

});

function runContinuousOperation(nextOperator){
  num1 = performCalculation(operator);
  displayNumber.textContent = num1;
  num2 = '';
  operator = nextOperator;
}

function performCalculation() { 
  const firstInt = parseInt(num1);
  const secondInt = parseInt(num2);

  if(operator){

  } 
  switch (operator) {
    case '+':
      displayNumber.textContent = firstInt + secondInt;
      break;
    case '-':
      displayNumber.textContent = firstInt - secondInt;
      break;
    case '*':
      displayNumber.textContent = firstInt * secondInt;
      break;
    case '/':
      displayNumber.textContent = firstInt / secondInt;
      break;
  }
  return displayNumber.textContent;
}

/*
document.getElementById('clearButton').addEventListener('click', () => {
  //e.preventDefault();
  document.getElementById('form').reset();
});
*/
document.getElementById('clearButton').addEventListener('click', (e) => {
  e.preventDefault();
  displayNumber.textContent = 0;
});

//Pseudo for performCalc(); checklist
//convert num1 and num2 to numbers
// check textContentof operator
// execute correct calculation based on textContentof operator and
  //num1 and num2
  //displayNumber.textContent