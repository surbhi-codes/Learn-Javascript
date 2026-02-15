// Conditional Statements:-

// if - Executes code if a specified condition is true.

const temperature = 30

if ( temperature > 25 ){
    console.log("It's a warm day.");    
}

// if-else Statement- Executes one block of code if a condition is true, otherwise executes another block if the condition is false

// const age = 18

if (age >= 18) {
   console.log("You're an adult");
} else {
   console.log("You're not an adult");
}

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

const score = 500

if ( score > 250 ) {
    let result = "pass"
    console.log(`User result: ${result}`); // User result: pass
}

 // console.log(`User result: ${result}`);   result is not defined


 const balance = 1000

 if (balance > 500) console.log("test"); // test
 
 // if (balance > 500) console.log("test"),console.log("test2"); -> This is wrong method to write code


 if (balance < 500) {
    console.log("less than 500");
 } 
 else if (balance < 700) {
    console.log("less than 700");
 }
 else if (balance < 800) {
    console.log("less than 800");
 }
 else {
    console.log("less than 1200"); // less than 1200
 }


 const userLoggedIn = true
 const debitCard = true
 const loggedInFromGoogle = false
 const loggedInFromEmail = true

 if (userLoggedIn && debitCard && 2==2) {
    console.log("Allow to buy course"); // Allow to buy course
 }

 if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
 }

 if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in"); // User logged in
 }

 let age = 18;
 let hasLicense = true;

 if (age >= 16) {
   console.log("You're old enough to drive");

    if(hasLincense) {
      console.log("You have your license!");
    } 
    else {
      console.log("You don't have your license yet!");
    }
}
 else {
   console.log("You must be 16+ to have a license");
}

