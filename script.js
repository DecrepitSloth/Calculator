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
    zero: "0"
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
        firstNum = parseInt(equationString);
        equationString = "";
    } else if (firstNum > 0) {
        // take all number inputs after using an operator and put them in secondNum
        secondNum = parseInt(equationString);
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
}

let firstNum = 0;
let secondNum = 0;
let total = 0;

let add = (firstNum, secondNum) => total += firstNum + secondNum;
let subtract = (firstNum, secondNum) => total += firstNum - secondNum;
let multiplication = (firstNum, secondNum) => total += firstNum * secondNum;
let division = (firstNum, secondNum) => total += firstNum / secondNum;

// 0/0 returns NaN. Fix with if statement under division
function operate(operator) {
        secondNum = parseInt(equationString);
        equationString = "";

    if (operator == "+") {add(firstNum, secondNum);} 
    else if (operator == "-") {subtract(firstNum, secondNum);} 
    else if (operator == "*") {multiplication(firstNum, secondNum);} 
    else if (operator == "/") {division(firstNum, secondNum);} 
    else {console.log("Error");}

    let totalDisplay = total;
    total = 0;
    document.getElementById("output").innerHTML = totalDisplay;
}