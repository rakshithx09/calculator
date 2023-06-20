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

let isNumClicked = 0
let expression = "";
let operand="" ;

let array= [];

numKeys.forEach(key => {
    key.addEventListener('click', () => {
        isNumClicked = 1;
        operand += key.textContent ;
        expression += key.textContent;
        upperDisplay.textContent = expression;
        lowerDisplay.style.display='none';
        
    });
});

operatorKeys.forEach(key => {
    key.addEventListener('click', () => {
        operand="";
        if (isNumClicked) {
            expression += key.textContent;
            upperDisplay.textContent = expression;
            lowerDisplay.style.display='none';
        }
    });
});

equals.addEventListener('click' , () => {
    lowerDisplay.style.display='flex';
    upperDisplay.style.padding='0 0.5rem'
});



