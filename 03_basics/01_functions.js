// FUNCTIONS IN JS:- Block of code designed to perform a specific task. You can define a function once and then call (or use) it whenever you need to execute that task. Functions can take inputs (called parameters) and can return an output.

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

//   function addTwoNumbers(number1, number2){
//       console.log(number1 + number2);   
//   }
 
//   addTwoNumbers() // NaN
//   addTwoNumbers(4,6) // 10 
//   addTwoNumbers(4, "6") // 46
//   addTwoNumbers(4, "d") // 4d
//   addTwoNumbers(4, null) // 4

function addTwoNumbers(number1, number2){
    //  let result = number1 + number2
    //  return result
     return number1 + number2
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



