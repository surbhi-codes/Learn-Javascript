// While Loop - entry/pre-test
// Checks condition before executing the body, if condition is true, loop runs; if false, it stops.

// let username = "";
// while (username === "" || username == null){ // username === "" → user entered nothing, username == null → user pressed Cancel
//     username = window.prompt(`Enter your name`);
// }
// console.log(`Hello ${username}`);

// do-while loop - exist controlled loop, post test loop
// the loop body executes atleast once even if the condition is false.

// let username = "";
// do{
//     username = window.prompt(`Enter your name`);
// } while(username === "" || username == null)

 // The loop runs if:
// username === "" → user entered nothing
// username == null → user pressed Cancel
    
// console.log(`Hello ${username}`);


let loggedIn = false;
let username;
let password;

while(!loggedIn){
    username = window.prompt(`Enter your name`);
    password = window.prompt(`Enter your password`);

    if(username === "myUsername" && password === "myPassword"){
        loggedIn = true;
        console.log("You're logged in!");
    }
    else{
        console.log("Invalid credentials! Please try again");
    }
}


