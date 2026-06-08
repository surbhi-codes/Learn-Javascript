// Array - a variable like structure that can hold more than one value

let fruits = ["Apple", "Litchi", "Mango", "Guava"];

// console.log(fruits);
// O/P - ['Apple', 'Litchi  ', 'Mango']

// fruits[1] = "coconut"; // Now index 1 will be coconut

// fruits.push("coconut");
// fruits.pop();
// fruits.shift("mango");
// fruits.unshift();

/*
console.log(fruits[0]); // 
console.log(fruits[1]); // Litchi
console.log(fruits[2]); // 
console.log(fruits[3]); // 
*/

let numOfFruits = fruits.length;
// let index = fruits.indexOf("Mango");
let index = fruits.indexOf("Papaya");
// an element that doesn't exist it will return -1

// console.log(index);

/*
 FOR LOOP-
1. for(let i = 1; i < fruits.length; i++){
    console.log(fruits[i]);
}
Direction: Forward.
Problem: Starts at i = 1, meaning it skips the first item (index 0).


2. for (let i = fruits.length; i >= 0; i--){
    console.log(fruits[i]);
}
Direction: Backward.
Problem: Starts at fruits.length, which is out-of-bounds. Your first output will be undefined.
 

3. for (let i = fruits.length - 1; i >= 0; i--){
    console.log(fruits[i]);
}
Direction: Backward.
Result: Perfect. Correctly hits every single item from the last one down to the first (index 0).
*/


fruits.sort().reverse();
/* 4. Direction: Forward.- shortcut
Result: Modern & cleanest. Automatically reads every item from start to finish. Use this unless you specifically need the index number i. */

for (let fruit of fruits){
    console.log(fruit);
}