// Immediately Invoked Function Expressions (IIFE) :-
// A function that is executed immediately after it is defined. The primary purpose of an IIFE is to create a new scope, typically to avoid polluting the global scope with variables or to create private variables.

// EXAMPLE-
(function() {
    console.log("This function runs immediately!");
})();
 

// function coffee() {
//     console.log(`DB CONNECTED`); // DB CONNECTED
// }
// coffee() 

// Without the parentheses, JavaScript thinks you are trying to declare a function, which cannot be invoked right away. The IIFE syntax ensures the function is treated as an expression, allowing immediate execution.

// "Because of the problem of global scope pollution, we use IIFE to avoid declaring variables in the global scope."

(function phone(){
    // named IIFE
    console.log(`DB CONNECTED`);
}) ();


( () => {
    // simple/unnamed IIFE
   console.log(`DB CONNECTED TWO`);  // DB CONNECTED TWO
} ) ();


( (name) => {
    // simple/unnamed IIFE
    console.log(`HEY MY NAME IS ${name}`); // HEY MY NAME IS Surbhi
 } ) ('Surbhi')