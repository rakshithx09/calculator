const upperDisplay = document.getElementById("display1");
const lowerDisplay = document.getElementById("display2");

const numKeys = document.querySelectorAll(".numK");
const operatorKeys = document.querySelectorAll(".operatorK");

const multiply = document.getElementById("multiplyKey");
const add = document.getElementById("addKey");
const subtract = document.getElementById("subtractKey");
const modulus = document.getElementById("modulusKey");
const divide = document.getElementById("divideKey");

const equals = document.getElementById("equalsKey");
const Delete = document.getElementById("cKey");

const point = document.getElementById("point");
const ac = document.getElementById("acKey");

let firstNumber = 0, secondNumber = 0, operator = "", temp = "";
let isNumClicked = 0;
let isOperatorClicked = 0;
let isDotClicked = 0;
let expression = "";
let result = 0;
let array = [];
let expArray = [];

Delete.addEventListener('click', () => {
    expArray = expression.split(" ");
    if (expArray[expArray.length - 1] == "") {
        expArray.pop();
    }
    if (!isNaN(expArray[expArray.length - 1])) {
        expArray[expArray.length - 1] = Math.floor(expArray[expArray.length - 1] / 10);
        if ((expArray[expArray.length - 1]) == 0) {
            expArray.pop();
        }
    } else {
        expArray.pop();
    }
    expression = expArray.join(" ");
    upperDisplay.textContent = expression;
    lowerDisplay.style.display = 'none';
    if (isNaN(expArray[expArray.length - 1])) {
        expression += " ";
        isNumClicked = 0;
    } else {
        isNumClicked = 1
    }
})

ac.addEventListener('click', () => {
    expression = "";
    upperDisplay.textContent = expression;
    lowerDisplay.style.display = 'none';
});

numKeys.forEach(key => {
    key.addEventListener('click', () => {
        isNumClicked = 1;
        isDotClicked = 0;
        expression += key.textContent;
        upperDisplay.textContent = expression;
        lowerDisplay.style.display = 'none';
    });
});

operatorKeys.forEach(key => {
    key.addEventListener('click', () => {
        if (isNumClicked) {
            expression += ` ${key.textContent} `;
            upperDisplay.textContent = expression;
            lowerDisplay.style.display = 'none';
            isNumClicked = 0;
        }
    });
});

point.addEventListener('click', () => {
    if (!isDotClicked && isNumClicked) {
        expression += point.textContent;
        upperDisplay.textContent = expression;
        isDotClicked = 1;
        isNumClicked=0;
    }
});

equals.addEventListener('click', () => {
    if (isNumClicked) {
        lowerDisplay.style.display = 'flex';
        upperDisplay.style.padding = '0 0.5rem';
        handleEquation();
    }

});

function handleEquation() {
    let eqnArray = expression.split(" ");
    const operatorList = ["÷", "×", "+", "-", "%"];
    for (let i = 0; i < 5; i++) {
        while (eqnArray.includes(operatorList[i])) {
            let operatorIndex = eqnArray.indexOf(operatorList[i]);
            firstNumber = Number(eqnArray[operatorIndex - 1]);
            secondNumber = Number(eqnArray[operatorIndex + 1]);
            operator = eqnArray[operatorIndex];
            result = calculate(firstNumber, operator, secondNumber);
            eqnArray.splice(operatorIndex - 1, 3, result);
        }
    }
    if (eqnArray.length==1) {
        lowerDisplay.textContent=`=${eqnArray[0]}`;
    }
    else
    lowerDisplay.textContent = `=${result.toFixed(1)}`;
}

function calculate(firstNumber, operator, secondNumber) {
    if (operator === "÷") return firstNumber / secondNumber;
    if (operator === "×") return firstNumber * secondNumber;
    if (operator === "+") return firstNumber + secondNumber;
    if (operator === "-") return firstNumber - secondNumber;
    if (operator === "%") return firstNumber % secondNumber;

}










