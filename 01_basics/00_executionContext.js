// JAVASCRIPT EXECUTION CONTEXT:- an execution context is the environment in which a piece of code is evaluated and executed

// {} -> Global EC -> this

// Types of execution contexts:-

// Global Execution Context:-
// Created when the JavaScript code starts executing, it handles the code that is not inside any function. It creates the global object (window in browsers) and the this keyword refers to this global object

// Function Execution Context:-
//Created when the JavaScript code starts executing, it handles the code that is not inside any function. It creates the global object (window in browsers) and the this keyword refers to this global object-Variable Object, Scope Chain, 'this' keyword

// Eval Execution Context


let val1 = 10
let val2 = 20
function addNum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum (10, 15)
console.log(result1); // 30
console.log(result2); // 25


// -> Memory Creation Phase = Allocates memory for variables (set to undefined) and functions (fully defined).
// -> Execution Phase = Runs the code line by line, assigning values to variables and executing functions.


// 1. Global Execution -> "this"

// 2. Memory Phase-
// val1 -> undefined
// val2 -> undefined
// add num -> defination
// result1 -> undefined
// result2 -> undefined


// 3. Execution Phase-
// val1 <- 10
// val2 <- 20
// add num -> new variable environment + execution thread -> delete
// result1 -> 30
// result2 -> 25