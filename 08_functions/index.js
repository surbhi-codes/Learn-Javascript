// Function - a reusable block of code (write once, use many times)
//            Call the function to execute that code.

// A parameter is a variable in a function that acts as a placeholder to receive values when the function is called.
// Arguments - Actual values passed to function

// happyBirthday → function name
// username, age → parameters (inputs the function needs)
// ${username} and ${age} → dynamic values (they change based on input)
// "Surbhi", 22 → arguments (and others)


function happyBirthday(username, age){
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log(`Happy birthday dear ${username}!`);
    console.log("Happy birthday to you!");
    console.log(`You're ${age} years old`);
}

happyBirthday("Surbhi", 22);
happyBirthday("Zein", 23);
happyBirthday("Mia", 24);

