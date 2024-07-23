// Javascript Variables:- are used to store and manage data
// var - can be re-declared & updated. A global scope variable
// let - cannot be re-declared but can be updated. A block scope variable
// const- cannot be re-declared & updated. A block scope variable

//  account_id/ account_Id/ accountId

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
 let a = "Hello Surbhi"
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
/*
 Prefer not to use var
 because of issue in block scope & functional scope
*/
studentName = "Surbhi"
rollNumber = "293098"
residence = "Delhi"

console.log(studentId);
console.table([studentName, studentId, rollNumber, studentState, residence])