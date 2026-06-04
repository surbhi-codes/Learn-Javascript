// const userEmail = "@subhigamil.com" // Got user email
// const userEmail = [] // Got user email
const userEmail = "" // Don't have your email

if (userEmail) {
    console.log("Got user email");
} else {
   console.log("Don't have your email");
}

// FALSY VALUES-
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// TRUTHY VALUES-
// "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("Array is empty");   
}


const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty"); 
}

// Nullish Coalescing Operator (??): null undefined = Returns the right-hand operand if the left-hand operand is null or undefined

let val1;
val1 = 6 ?? 12 // 6
val1 = null ?? 10 // 10
val1 = undefined ?? 18 // 18
val1 = null ?? 10 ?? 20 // 10

console.log(val1);

// Terniary Operator = A shorthand for if-else that returns a value based on a condition.

// condition ? true : false

const hotCoffeePrice = 100
hotCoffeePrice <= 90 ? console.log("less than 90") : console.log("more than 90");

