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
// }

// const addTwo = (num1, num2) => num1 + num2 //  implicit return 

// const addTwo = (num1, num2) => ( num1 + num2)

 const addTwo = (num1, num2) => ({username: "surbhi"}) // { username: 'surbhi' }

 console.log(addTwo(5,6));

// const myArray = [3,4, 5, 6]

// myArray.forEach()