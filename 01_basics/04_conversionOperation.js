// let score = "surbhi"

// console.log(typeof score);
// console.log(typeof(score));

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log (valueInNumber);

// "33" => 33
// "33abc" => NaN [not a number] 
// true=> 1; false=> 0  

// let isLoggedIn = "Surbhi"
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1=> true; 0=> false
// "", NaN, null, undefined => false
// "surbhi"=> true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

//  -: OPERATIONS :- use to perform  some operation on data
//  Expressin - a + b  a & b are operands, + is operator


// ARITHMETIC OPERATORS :- 
//+, -, *, /,  Modulus (%), Exponentiation(**), 
//   let a = 7;
//   let b = 3;
   
//   console.log("a = ", a, " & b = ", b);
//   console.log("a + b =", a + b);
//   console.log("a - b =", a - b);
//   console.log("a * b =", a * b);
//   console.log("a / b =", a / b);
//   console.log("a % b =", a % b);
//   console.log("a ** b =", a ** b);

 let students = 30;

 students = students / 2;
 students = students ** 2;

 let extraStudents = students % 2;

 console.log(students);

  // UNARY OPERATORS:- [post = a++], [pre = ++a]
  // Increment(++) [a++ = a+1], Decrement(--) [a-- = a-1]

//   let a = 7;
//   let b = 3;

//   console.log("a =", a, "& b = ", b);
//   a = a + 1; or a++;
//   console.log("a = ", a);


// ASSIGNMENT OPERATORS :- = returns a value
// =, +=, -=, %=, **=

//  let a = 7;
//    let b = 3;

// Augmented assignment operators

// a += 2; // a = a +2
// console.log("a =", a); // 9

// a -= 2; // a = a -2
// console.log("a =", a); // 7

// a **= 2; // a = a *2
// console.log("a =", a); // 49

// a %= 2; // a = a /2
// console.log("a =", a); // 1

/* Operator Precedence
1. parenthesis ()
2. exponents
3. multiplication & divide & modulo
4. addition & subtraction
*/

let result = 1 + 2 * 3 + 4 ** 2;
console.log(result);

// COMPARISON OPERATOR:- 

//  Equal to == (vlaue)
// Equal to & type === (data)
// Not equal to !=
// Not equal to & type !==
// >, >=, <, <= 

// let a = 5; 
// let b = 3; 

// console.log("a == b", a == b);// flase
// console.log("a !== b", a !== b);// true

// let a = 5; // number
// let b = "5"; // string -> number

// console.log("a == b", a ==b); // true

// let a = 3;
// let b = 8;

// console.log("a < b", a < b); // true
// console.log("a > b", a > b); // false

// let a = 8;
// let b = 8;
// console.log("a <= b", a <= b); // true
// console.log("a >= b", a >= b); // true

// LOGICAL OPERATOR :-
// Logical AND && (cond1 = true, cond2 = true = true) otherwise all false
// Logical OR  || (cond1 = false, cond2 = false = false) otherwise all true
// Logical NOT ! (true = false, false = true)
 
// let a = 6;
// let b = 4;

// let cond1 = a < b;// false
// let cond2 = a === 6; // true
// console.log("cond1 && cond2 = ", cond1 && cond2); // false
 
// or we can write like this too
//  let a = 6;
//  let b = 4;
//  console.log("cond1 && cond2 = ", a < b && a ===6); //false


//  let a = 6;
//  let b = 4;
//  console.log("cond1 || cond2 = ", a < b || a ===6); // true

//  let a = 6;
//  let b = 4;
//  console.log("!(6<4)= ", !(a === 6)); // true -> false

 
let value = 3
let negValue = -value
// Console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2%2);
// console.log(2%3);

let str1 = "Hello"
let str2 = " Surbhi"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2 ); // 12
console.log( 1 + "2" ); // 12
console.log("1" + 2 + 2); // 122
console.log( 1 + 2 + "2"); // 32


//console.log( ( 3 + 4) * 5 % 3 );

// console.log(+true);
// console.log(+"");

// let num1, num2, num3
// num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter); // 101

// type conversion = change the datatype of a value to another (strings, numbers, boolean)

let age = window.prompt("What's your age");
age = Number(age);

age+=1;
console.log(age);

let x = momos;
let y = momos;
let z = momos;

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

/* output-
NaN 'number'
momos string
true 'boolean'
*/