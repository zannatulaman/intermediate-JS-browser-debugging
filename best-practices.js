//use descriptive and relevant variable name

// best practice
const age = 25;


// bad practice
const x = 15

// avoid var keyword
var y = 50

// 2nd best practice 


const globalVar = 50;

// bad practice
function addToglovalVar(value){
    return globalVar + value
}


// good practice
function addValue(globalVar2 , value){
    return globalVar2 + value
}

// 3rd best practice
// DRY - Don't Repeat Yourself

const length = 20;
const width  = 10;
const length2 = 20;
const width2 = 15;

// const total = (length * width);
// const total2 = (length2 * width2);

// console.log(total);
// console.log(total2);


// best practice
function totalValue(length, width){
    return length * width
}
console.log(totalValue(20, 30));
console.log(totalValue(20, 10));

// document your code 
// Js docs


/**
* add two numbers
* @param {number} num1 - The first number to add 
* @param {number} num2 - The second number to add
* @returns {number} - The sum of two numbers
*/


function addTwoNumbers(num1, num2){
    return num1 + num2
    
}






