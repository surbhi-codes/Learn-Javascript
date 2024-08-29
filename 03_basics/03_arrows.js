// ARROW FUNCTIONS [ => ]  [ () => {} ]
//  Compact way of writing a function

// const functionName = ( param1, param2 ...) => {
    //do some work }   



const sum = (a, b) => {
    return a + b;
}

const user = {
    username: "surbhi",
    price: 9999,

    welcomeMessage: function() {
       console.log(`${this.username} , welcome to website`);
       console.log(this);
    }

}



   // The 'this' keyword in JS refers to the object that is currently executing the code. Its value depends on where it is used:

  // Global Context: In the global scope, this refers to the global object (window in browsers).

// Object Method: Inside a method, this refers to the object that owns the method.

//Constructor Function: When used in a constructor function, this refers to the new object being created.

// Event Handler: In an event, this refers to the element that received the event.

// Arrow Functions: Arrow functions don't have their own this; they inherit it from the surrounding lexical context.



// user.welcomeMessage()
//  user.username = "Tara"
//  user.welcomeMessage() // Tara , welcome to website

 //console.log(this); // {}

// function coffee(){
//     let username = "Surbhi"
//     console.log(this.username);   // undefined
// }

//  coffee()

// const coffee = function() {
//     let username = "Surbhi"
//     console.log(this.username);
// }

const coffee = () => {
    let username = "surbhi"
    console.log(this); // undefined
}

coffee()

// const addTwo = (num1, num2) => {               
//  return num1 + num2
// }   [ If we are using curly braces, then we have to use the return keyword ]

// const addTwo = (num1, num2) => num1 + num2 //  implicit return 

// const addTwo = (num1, num2) => ( num1 + num2)  [ If we are using parentheses, then we don't have to use the `return` keyword. ]

 const addTwo = (num1, num2) => ({username: "surbhi"}) // { username: 'surbhi' }

 console.log(addTwo(5,6));

// const myArray = [3,4, 5, 6]

// myArray.forEach()