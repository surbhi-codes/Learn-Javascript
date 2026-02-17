// JAVASCRIPT EXECUTION CONTEXT:- an execution context is the environment in which a piece of code is evaluated and executed

// {} -> Global EC -> this

// Types of execution contexts:-

// Global Execution Context:-
// 1. Created when the JavaScript code first starts executing.
// 2. It is the default context and covers code that is not inside any function.
// 3. Has access to global variables and objects (e.g., window in browsers).
// 4. There is only one global execution context throughout the execution of the program.


// Function Execution Context:-
// 1. Created whenever a function is invoked.
// 2. Each function call gets its own unique execution context.
// 3. Has access to the function's local variables, arguments, and any variables in the outer scope (due to closures).
// 4. Once the function finishes execution, the function execution context is destroyed.


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