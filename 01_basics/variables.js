/*
# Javascript Variables:- are used to store and manage data
# Uses for - store, use, change information.

 # var - can be re-declared & updated. A global scope variable [old school var]
 # let - cannot be re-declared but can be updated. A block scope variable [modern variable declaration]
 # const- cannot be re-declared & updated. A block scope variable

  # account_id/ account_Id/ accountId

         -: RULES FOR DECLARING VARIABLES :-

 # variables- abc or 123 or $, '_' should be 1st charachter
 # name variables using camel casing
 # variables names are case sensitive 'a' & 'A' are different
 # reserved names cannot be variable name: For example: let, class, return, and function are reserved
 # The first character must not be a digit.

*/

// 1. You cannot start with number
var value2 = 20;
console.log(value1);

// 2. You can use only underscore _ or dollar symbol $
var first_name = "Surbhi";
var _lastname = "Jha";
console.log(first_name + " " + _lastname);

var first$name = "Lily";
var $lastname = "Singh";
console.log(first$name + " " + $lastname);

// Convention 1. Use camelCase writing
var firstName = "camelCase";
console.log(firstName);

// Convention 2. Use snake_case writing
var first_name = "snake_case";
console.log(first_name);

//         -:DECLARE VARIABLE USING VAR:-

// Declare a variable
var firstName = "surbhi-codes";

// Use a variable
console.log(firstName);

// Change value
firstName = "Surbhi Jha";
console.log(firstName);

/* Expected Output:-
  surbhi-codes
  Surbhi Jha
*/

// -:DECLARE VARIABLE USING LET:-
// Declare a variable
  let value = 20;

  // Use a variable:-
  console.log(value);

// Change value
value = "21";
console.log(value);
   
/* Expected Output:-
  20
  21
*/

// -:DECLARE VARIABLE USING CONST:-
// Declare a variable
const leapYear = 366;

// Use a variable
console.log(leapYear);

/*
Expected Output:-
366
*/

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
