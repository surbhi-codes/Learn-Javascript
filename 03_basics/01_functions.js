// FUNCTIONS IN JS:- Block of code designed to perform a specific task. You can define a function once and then call (or use) it whenever you need to execute that task. Functions can take inputs (called parameters) and can return an output.

//  creating a function is about defining it, while calling a function is about using it to perform its task.

// functions parameter- like local variables of function - block scope  
// Functions Definition-
//  (Keyword)
// 1. function functionName() {     and    2. function functionName(param1, param2....){
     // do some work                            // do some work
//   }                                          }

// Function Call-
// functionName();


function sayMyName(){
   console.log("S");
   console.log("U");
   console.log("R");
   console.log("B");
   console.log("H");
   console.log("I");
}
  // sayMyName()

/*S
  U
  R
  B
  H
  I */

  // (number1, number2)- Parameters [Parameters are placeholders in a function]
  // (4, 6 are arguments) [arguments are the actual values you give to those placeholders when calling the function]

//  1. function addTwoNumbers(number1, number2){
//       console.log(number1 + number2);   
//   }
 
//   addTwoNumbers() // NaN
//   addTwoNumbers(4,6) // 10 
//   addTwoNumbers(4, "6") // 46
//   addTwoNumbers(4, "d") // 4d
//   addTwoNumbers(4, null) // 4

 function addTwoNumbers(number1, number2){
     let result = number1 + number2
      return result
     // return number1 + number2  [after return code will not execute]
}

const result = addTwoNumbers(5,4)
console.log("Result:", result); // 9


function loginUserMessage(username = "Lily"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Surbhi")); // Surbhi just logged in


function calculateCartPrice(num1){
 return num1   
}
// console.log(calculateCartPrice(2)); // 2
// console.log(calculateCartPrice(200, 400, 600)); // 200 

function calculateCartPrice(...num1) // [... = spread or rest]
{
    return num1   
   }
   console.log(calculateCartPrice(200, 400, 600));// [ 200, 400, 600 ]

   function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 20000));// [ 500, 20000 ]

const user = {
    username: "Surbhi",
    prices:999
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);   
} // 

handleObject(user)
handleObject(
    {
        username: "Lily",
        price: 599
    }
)

// Username is Lily and price is 599

const myNewArray = [200, 800, 500, 300] // 800

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray)); // 800
console.log(returnSecondValue([200, 800, 500, 300])); // 800


// Random Number Generation
// var n = Math.random();
// Math.floor(n*6) + 1
// Math.random() is a function that returns a floating-point number between 0 (inclusive) and 1
//  a built-in JavaScript object that has properties and methods for mathematical constants and functions.
