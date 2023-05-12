const nums = {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
    zero: "0",
    decimal: "."
};

const ops = {
    plus: "+",
    minus: "-",
    multiply: "*",
    divide: "/"
};

let equationString = "";
let display = "";
let op;
let previousOp;

function numbers(inputNum) {
    if (firstNum !== 0 && secondNum !== 0) {
        if (previousOp == "+") {add(firstNum, secondNum);} 
        else if (previousOp == "-") {subtract(firstNum, secondNum);} 
        else if (previousOp == "*") {multiplication(firstNum, secondNum);} 
        else if (previousOp == "/") {division(firstNum, secondNum);} 
        else {console.log("Error");}

        firstNum = total;
        secondNum = 0;
        total = 0;
    } 
    
    if (inputNum == 0 && op == "/") {divideZero = 1;}
    if (inputNum == "." && equationString.includes(".")) {return}
    if (inputNum == ".") {decimalCheck = 1}

    // send input to display
    display += inputNum;
    document.getElementById("output").innerHTML = display;
    // send input to equationString
    equationString += inputNum;
}

function operators(inputOp) {
    previousOp = op
    // send input to display
    display += inputOp;
    document.getElementById("output").innerHTML = display;
    // send input to operator
    op = inputOp;

    if (firstNum == 0) {
        // take all numbers input and make them firstNum
        firstNum = parseFloat(equationString);
        equationString = "";
    } else if (firstNum > 0) {
        // take all number inputs after using an operator and put them in secondNum
        secondNum = parseFloat(equationString);
        equationString = "";
    }
}

function clearDisplay() {
    display = "";
    document.getElementById("output").innerHTML = "";
    equationString = "";
    firstNum = 0;
    secondNum = 0;
    op = "";
    divideZero = 0;
}

let firstNum = 0;
let secondNum = 0;
let total = 0;
let divideZero = 0;
let decimalCheck = 0;

let add = (firstNum, secondNum) => total += firstNum + secondNum;
let subtract = (firstNum, secondNum) => total += firstNum - secondNum;
let multiplication = (firstNum, secondNum) => total += firstNum * secondNum;
let division = (firstNum, secondNum) => total += firstNum / secondNum;

// 0/0 returns NaN. Fix with if statement under division
function operate(operator) {
        secondNum = parseFloat(equationString);
        equationString = "";

    if (operator == "+") {add(firstNum, secondNum);} 
    else if (operator == "-") {subtract(firstNum, secondNum);} 
    else if (operator == "*") {multiplication(firstNum, secondNum);} 
    else if (operator == "/") {division(firstNum, secondNum);} 
    else {console.log("Error");}

    if (decimalCheck == 1) {
        totalDisplay = total.toFixed(3)
        decimalCheck = 0;
    } else {totalDisplay = total;}
    total = 0;

    if (divideZero == 1) {totalDisplay = "Can't Divide by 0"};
    
    clearDisplay()
    document.getElementById("output").innerHTML = totalDisplay;
}