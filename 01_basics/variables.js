// Javascript Variables:- are used to store and manage data
// Uses for - store, use, change information.

// var - can be re-declared & updated. A global scope variable [old school var]
// let - cannot be re-declared but can be updated. A block scope variable [modern variable declaration]
// const- cannot be re-declared & updated. A block scope variable

//  account_id/ account_Id/ accountId

// variables- abc or 123 or $, '_' should be 1st charachter
// name variables using camel casing
// variables names are case sensitive 'a' & 'A' are different
// reserved names cannot be variable name: For example: let, class, return, and function are reserved
// The first character must not be a digit.

// var keyword- var= 10
var a = "Hello Surbhi"
  var b = 3;
  var c = 5;
  var d = b + c;

  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);

// let keyword- 

 let a = "Hello Surbhi"  // Define the variable and assign the value 
 let b = "learn";
 let c = "21";
 let d = b + c;

 console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);

// const keyword-
const a = "Hello Surbhi"
console.log(a);

const b = 365;
console.log(b);

const c = "21";
console.log(c);

const studentId = 129090
let studentName = "Surbhi"
var rollNumber = "45790"
residence = "Jhansi"
let studentState;

// studentId = 2  not allowed
// JavaScript accepts both double and single quotes

//  Prefer not to use var
//  because of issue in block scope & functional scope
// A variable should be declared only once.A repeated declaration of the same variable is an error

studentName = "Surbhi"
rollNumber = "293098"
residence = "Delhi"

console.log(studentId);
console.table([studentName, studentId, rollNumber, studentState, residence])