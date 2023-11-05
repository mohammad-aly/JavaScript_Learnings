let num1 = 8;
let num2 = 10;

document.getElementById("num1-el").innerText = num1;
document.getElementById("num2-el").innerText = num2;


function Addition(){
    let sum = num1 + num2;
    let item = document.getElementById("output-el");

    item.textContent = sum;
}

function Subtraction(){
    let sum = num1 - num2;
    let item = document.getElementById("output-el");

    item.textContent = sum;
}

function Division(){
    let sum = num1 / num2;
    let item = document.getElementById("output-el");

    item.textContent = sum;
}

function Multiply(){
    let sum = num1 * num2;
    let item = document.getElementById("output-el");

    item.textContent = sum;
}