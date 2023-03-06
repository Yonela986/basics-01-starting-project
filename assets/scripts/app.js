//value not initialized as yet
//let currentResult;
//global scope variables
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

//gets input from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

//Generates and write calculation log
function createAndWriteOutput(operators, resultBeforeCalc, calcNumber) {
  const calculateDescription = `${resultBeforeCalc} ${operators} ${calcNumber}`; //output text
  outputResult(currentResult, calculateDescription); //from vendor file
}
function writeToLog(
  operationIdentifier,
  prevsResult,
  operationNumber,
  newResult
){
 //objects to add your key value pairs using identifies
 const logEntry = {
  operation: operationIdentifier,
  prevResult: prevsResult,
  number: operationNumber,
  result: newResult,
}; 
//or can use the push method
logEntries.push(logEntry);
//accessing out data using the dot notation.
//console.log(logEntry.operation);
console.log(logEntries);
}

function calculationResult(calculationType){
const enterNumber = getUserNumberInput();  
  const initialResult = currentResult;
  let mathOperator;
  if(calculationType === 'ADD'){
       currentResult += enterNumber;
mathOperator = '+'
  }else if(calculationType === 'SUBTRACT'){
    currentResult -= enterNumber;
    mathOperator = '-'
  } else if(calculationType === 'MULTIPLY'){
    currentResult *= enterNumber;
   mathOperator = '*'
  }
  else if(calculationType === 'DIVIDE'){
    currentResult /= enterNumber;
  mathOperator = '/'

  }
  createAndWriteOutput(mathOperator, initialResult, enterNumber);
  writeToLog(calculationType, initialResult, enterNumber, currentResult);
}

function addNumbers() {
  calculationResult('ADD');
}

function subtract() {
  calculationResult('SUBTRACT');
}

function multiply() {
  calculationResult('MULTIPLY');

}

function divide() {
  calculationResult('DIVIDE');
}
//takes 2 arguments..function - which function(just the function name) you want to execute after you have clicked the button.
addBtn.addEventListener("click", addNumbers); //we still need to get the arguments for our parameter
// addNumbers(1, 5);
// addNumbers(5, 5),
//currentResult = addNumbers(1, 5);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

// 0 + 10 will then override the currentResult on the left, and we can do more calculations
//currentResult = (currentResult +10) * 3 / 2 - 2;
//let calculateDescription = "(0 +10) * 3 / 2 - 2"
//otherway to do it when using the backtick ``:
//let calculateDescription = `(${defaultResult} + 0 +10) * 3 / 2 - 2)`
