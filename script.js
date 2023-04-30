const nums = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9"
};

const ops = {
    plus: "+",
    minus: "-",
    multiply: "*",
    divide: "/"
};

// Currently not set up to update from nums
let firstNum = 0;
let secondNum = 0;

// remember to add return or equivalent for each function
let add = (firstNum, secondNum) => firstNum + secondNum;
let subtract = (firstNum, secondNum) => firstNum - secondNum;
let multiplication = (firstNum, secondNum) => firstNum * secondNum;
let division = (firstNum, secondNum) => firstNum / secondNum;

// 0/0 returns NaN. Fix with if statement under division
function operate(operator) {
    if (operator == "+") {add(firstNum, secondNum);} 
    else if (operator == "-") {subtract(firstNum, secondNum);} 
    else if (operator == "*") {multiplication(firstNum, secondNum);} 
    else if (operator == "/") {division(firstNum, secondNum);} 
    else {console.log("Error");}
}