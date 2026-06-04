// LOOP =  for of - Iterates over iterable objects like arrays, strings, etc. It gives you the values.
// for (const value of array) { }


// ["", "", ""]
// [{}, {}, {}]


// for (const element of object) {
    
// }

const arr = [1,2, 3, 4, 5, 6]

for (const num of arr) {
   // console.log(num);
}   
// OUTPUT
// 1
// 1
// 2
// 3
// 4
// 5
// 6 

const greetings = "Hello Students"
for (const greet of greetings) {
   // console.log(`Each char is ${greet}`);
}

//  OUTPUT
// Each char is H
// Each char is e
// Each char is l
// Each char is l
// Each char is o
// Each char is
// Each char is S
// Each char is t
// Each char is u
// Each char is d
// Each char is e
// Each char is n
// Each char is t
// Each char is s 

// MAPS- Maps in JavaScript are a type of data structure that allows you to store key-value pairs. Unlike objects, where keys are usually strings, maps allow keys of any type, including objects, functions, or even other maps
// They maintain insertion order and are more efficient for frequent key-value updates than objects.
// Create: new Map()
// Add: map.set(key, value)
// Get: map.get(key)
// Check: map.has(key)
// Delete: map.delete(key)
// Size: map.size
// Iterate: map.forEach() or for...of

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);
/*  'IN' => 'India',
    'USA' => 'United States of America',
    'Fr' => 'France' */

   
for (const [key, value] of map) {
    console.log(key, ':-', value);
}
// OUTPUT
// IN :- India
// USA :- United States of America
// Fr :- France


const myObject = {
    game1: 'NFS',
    game2: 'GTA'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
} // myObject is not iterable