// ternary operator = a shortcut to if{} and else{} statements
//                      helps to assign a variable based on a condition
//                      condition ? codeIfTrue : codeFalseTrue;

// let age = 18;
// let message = age >= 18 ? "You're an adult" : "You are a minor";``
// console.log(message);

// let time = 9;
// let greeting = time < 12 ? "Good morning" : "Good afternoon";
// console.log(greeting);  


// let isStudent = false;
// let message = isStudent ? "You're a student" : "You're not a student";
// console.log(message);

let purchaseAmount = 1000;
let discount = purchaseAmount >= 500 ? 10 : 0;
console.log(`Your total amount is $${purchaseAmount - purchaseAmount * (discount/100)}`);