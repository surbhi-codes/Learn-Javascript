/* Callback = a function that is passed as an argument to another function.

   used to handle asynchronous operations:
1. Reading a file
2. Network requests
3. Interacting with databases
 "Hey, when you are done, call this next."
*/

// 1st example

hello(wait); // // 1. You call hello and pass 'wait' as the callback

function hello(callback){
    console.log("Hello! Miss Surbhi"); // 2. This prints first
    callback();  // 3. This executes the function you passed in (which is wait)
}

function wait(){
    console.log("Wait!");
}

function leave(){
    console.log("Leave!");
}

function goodbye(){
    console.log("Goodbye! Miss Surbhi");
}

/* What happens here?
You invoke hello(wait). Inside the hello function, the parameter named callback becomes a placeholder for wait.

The code prints "Hello! Miss Surbhi".

Then, callback() is called. Because callback is currently holding the wait function, it executes wait(), which prints "Wait!". */

// 2nd Example

sum (displayPage, 1, 2); //  1. Pass the display function and the numbers

function sum(callback, x, y){
    let result = x + y; // 2. Calculates 1 + 2 = 3
    callback(result); // 3. Sends '3' into the callback function
}
    
function displayConsole(result){
    console.log(result);
}

function displayPage(result){
    document.getElementById("myH1").textContent = result; // 4. Puts '3' into the HTML element with id "myH1"
}

/* What happens here?
You call sum and give it three things: the displayPage function, the number 1, and the number 2.

Inside sum, it adds 1 + 2 to get 3.

It then triggers callback(result). Since callback is a placeholder for displayPage, it secretly runs displayPage(3).

displayPage takes that 3 and updates your website's heading. */