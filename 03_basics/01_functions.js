// FUNCTIONS IN JS:- Block of code designed to perform a specific task. You can define a function once and then call (or use) it whenever you need to execute that task. Functions can take inputs (called parameters) and can return an output.

function sayMyName(){
   console.log("S");
   console.log("U");
   console.log("R");
   console.log("B");
   console.log("H");
   console.log("I");
}
  sayMyName()
/*S
  U
  R
  B
  H
  I */

  function addTwoNumbers(number1, number2) // (number1, number2)- 
  {
      console.log(number1 + number2);   
  }
  // handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
  addTwoNumbers()