// Javascript Variables:- var, let, const
// var - for browser
// let - if you can't use const 
// const- use it where value should not be change

//  account_id/ account_Id/ accountId

const accountId = 129090
let accountEmail = "surbhi@google.com"
var accountPassword = "45790"
accountCity = "Jhansi"
let accountState;

// accountId = 2  not allowed
// JavaScript accepts both double and single quotes
/*
 Prefer not to use var
 because of issue in block scope & functional scope
*/
accountEmail = "Subhi@google"
accountPassword = "293098"
accountCity = "Delhi"

console.log(accountId);
console.table([accountEmail, accountId, accountPassword, accountState, accountCity])