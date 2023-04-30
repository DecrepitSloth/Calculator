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

let firstNum = 0;
let secondNum = 0;

let add = (firstNum, secondNum) => firstNum + secondNum;
let subtract = (firstNum, secondNum) => firstNum - secondNum;
let multiplication = (firstNum, secondNum) => firstNum * secondNum;
let division = (firstNum, secondNum) => firstNum / secondNum;