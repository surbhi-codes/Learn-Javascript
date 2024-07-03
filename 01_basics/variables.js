// Javascript Variables:- var, let, const
// var - for browser
// let - if you can't use const 
// const- use it where value should not be change

//  account_id/ account_Id/ accountId

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