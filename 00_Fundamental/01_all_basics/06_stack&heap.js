// STACK:- The stack is used for static memory allocation (primitive data types and function calls).It's fast and follows a Last-In-First-Out (LIFO) order but has a limited size.

// HEAP:- The heap is used for dynamic memory allocation (objects and functions) It's more flexible but slower to access than the stack. Memory here is managed by JavaScript's garbage collector.

// The stack holds references to data in the heap, allowing efficient management of memory for complex data structures

let name = "Tina"; // 'name' is stored on the stack
let person = { age: 25 }; // 'person' reference is on the stack, but the object { age: 25 } is on the heap

// The stack keeps track of the order of function calls, and when a function is finished, it is removed from the stack, freeing up memory. Objects in the heap remain until they are no longer needed, at which point the garbage collector will remove them.

let myName = "Surbhi";

let nickname = myName
nickname = "Subhi"

console.log(myName);
console.log(nickname);

let userOne = {
    email: "user@google.com",
    upi: "user@ytl"
}

let userTwo = userOne

userTwo.email = "surbhi@google.com"

console.log(userOne.email);
console.log(userTwo.email);
