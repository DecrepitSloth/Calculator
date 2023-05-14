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
    console.log(total);
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
    } else if (firstNum > 0 && equationString !== "") {
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
    backCheck = 0;
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

function operate(operator) {
    if (backCheck == 1) {total = 0};
    if (equationString == "" && backCheck == 1) {
        total = firstNum
    } else {
        secondNum = parseFloat(equationString);
        equationString = "";
        if (operator == "+") {add(firstNum, secondNum);} 
        else if (operator == "-") {subtract(firstNum, secondNum);} 
        else if (operator == "*") {multiplication(firstNum, secondNum);} 
        else if (operator == "/") {division(firstNum, secondNum);} 
        else {console.log("Error");}
    }

    if (decimalCheck == 1) {
        totalDisplay = total.toFixed(3)
        decimalCheck = 0;
    } else {totalDisplay = total;}
    total = 0;

    if (divideZero == 1) {totalDisplay = "Can't Divide by 0"};
    
    clearDisplay()
    document.getElementById("output").innerHTML = totalDisplay;
}

opArray = []
numArray = []
backCheck = 0;

function backspace() {
    backCheck = 1;
    let lastString = display.slice(display.length - 1, display.length)
    let remainder = display.slice(0, display.length - 1);
    // update display
    display = remainder;
    document.getElementById("output").innerHTML = display
    
    // change behavior based on last string
    if (Object.values(nums).includes(lastString)) {
        let newES = equationString.slice(0, equationString.length -1)
        equationString = newES; 
    } else if (Object.values(ops).includes(lastString)) {
        op = "";
        secondNum = 0;
    }

    numArray = []
    opArray = []

    for (i = 0; i < display.length; i++) {
        if ((i % 2) == 0) {
            let displayNumber = parseFloat(display[i]);
            numArray.push(displayNumber)
        } 
        else {opArray.push(display[i])}
    }

    recalculate()
};

function recalculate() {
    total = 0;
    for (i = 0; i < opArray.length; i++) {
        if (opArray[i] == "+" && numArray[i + 1] !== undefined) {add(numArray[i], numArray[i + 1]);} 
        else if (opArray[i] == "-" && numArray[i + 1] !== undefined) {subtract(numArray[i], numArray[i + 1]);} 
        else if (opArray[i] == "*" && numArray[i + 1] !== undefined) {multiplication(numArray[i], numArray[i + 1]);} 
        else if (opArray[i] == "/" && numArray[i + 1] !== undefined) {division(numArray[i], numArray[i + 1]);} 
        else {
            console.log(opArray)
            console.log(numArray)
            op = opArray.pop()
            firstNum = total;
            total = 0;
        }}


        if (numArray.length == 1) {firstNum = parseFloat(display[0])}  
    }