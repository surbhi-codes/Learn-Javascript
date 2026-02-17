const score = 500
// console.log(score); // 500

const balance = new Number(200)
 // console.log(balance); // [Number: 200]

// console.log(balance.toString); // [Function: toString]
// console.log(balance.toString().length); // 3
// console.log(balance.toFixed(2)); // 200.00

const otherNumber = 123.35899
// console.log(otherNumber.toPrecision(4)); // 123.4

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // 10,00,000

//+++++++++++++++++++ MATHS ++++++++++++++++++++

// Javascript Math Object:- The JavaScript Math object allows you to perform mathematical tasks on numbers.
// The Math object is static
// Built-in object that provides a collection of properties and methods


// console.log(Math); // Object [Math] {}
// console.log(Math.abs(-8)); // 8 to find absolute values

// console.log(Math.round(4.6)); // 5 for roundoff [returns the nearest integer]
// console.log(Math.ceil(4.2)); // 5 [returns the value of x rounded up to its nearest integer]
// console.log(Math.floor(4.9));// 4 [returns the value of x rounded up to its nearest integer]

// console.log(Math.min(9, 3, 4, 1)); // 1 [minimum number]
// console.log(Math.max(12, 6, 8, 9)); // 12 [maximum number]
// console.log(Math.sqrt(5)); // 2.23606797749979
// console.log(Math.PI)       // returns PI



let x = 3;
let y = 2;
let z = 7;

// z = Math.pow(x, y);
   z = Math.sin;
   z = Math.cos;
   z = Math.sign;
console.log(z);


console.log(Math.random()); // [returns a random decimal number between 0 (inclusive) and 1 (exclusive)]
console.log((Math.random()*10) + 1); // 6.890077461822239 
console.log(Math.floor(Math.random()*10) + 1); // [1 to 9]

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
