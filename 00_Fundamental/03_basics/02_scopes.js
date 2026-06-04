// BLOCK SCOPE:-  Variables defined within a block (inside {}) using let or const are only accessible within that block. For example, inside an if statement or a loop.

// GLOBAL SCOPE:- Variables defined outside of any function or block are in the global scope, meaning they can be accessed from anywhere in the code.


// block scope is limited to {} boundaries.
// global scope is accessible throughout the entire code.

// let a = 100
// const b = 200
// var c = 300

// console.log(a); // 100
// console.log(b); // 200
// console.log(c); // 300


  //var c = 30 // Global scope
    let a = 50
 // Block scope
if (true) {
    let a = 100
    const b = 200
     c = 300 // 300
    var c = 300 // 300
    console.log("INNER: ", a); // INNER:  100
    
}
 console.log(a); // a is not defined
// console.log(b); // b is not defined
console.log(c);// 300

// When scopes are nested, an inner scope has access to variables in its own scope and in any outer (parent) scope, but the outer scope cannot access variables defined in the inner scope.
// Outer Function Scope: outerVar is accessible within outerFunction and innerFunction.
// Inner Function Scope: innerVar is only accessible within innerFunction.

function one(){
    const username = "Subhi"

    function two(){
        const website = "Study.com"
        console.log(username);    // Subhi
    }
    // console.log(website);This will give error

    two()
}

one()

if (true) {
    const username = "Surbhi"
    if (username === "Surbhi") {
        const website = " Study.com"
        console.log(username + website); // Surbhi Study.com
    }
    // console.log(website);
}

// console.log(username);


//*************** INTERESTING CONCEPT ****************


console.log(addOne(5)); // 6

function addOne(num) {
    return num + 1
}



addTwo(4) // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}