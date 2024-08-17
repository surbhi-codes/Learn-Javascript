// ARRAYS:- [collection of data, mutable]
// Arrays in Javascript are used to store multiple values in a single variable. They are like a list that can hold items such as numbers, strings, objects, or even other arrays.

// JavaScript arrays are resizable and can contain a mix of different data types
// JavaScript arrays are not associative arrays
// JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
// JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
// A shallow copy of an object is a copy whose pro perties share the same references
// A deep copy of an object is a copy whose properties do not share the same references

const myArr = [ 0, 1, 2, 3, 4, 5 ]
const myHeors = ["Ironman", "Spiderman"]

const myArr2 = new Array(1, 2,3, 4)
// console.log(myArr[1]); // 1


// ARRAY METHODS:-
//  push( ) : add to end
let vegetables = ["Tomato","Pea", "Potato", "Radish", "Carrot"]; // [ 'Tomato', 'Pea', 'Potato', 'Radish', 'Carrot' ]
 vegetables.push("Spinach", "Brinjal");  // ['Tomato',  'Pea','Potato',  'Radish','Carrot',  'Spinach','Brinjal']

 console.log(vegetables);

//  pop( ) : delete from end & return
// toString( ) : converts array to string
// concat( ) : joins multiple arrays & returns result
// unshift( ) : add to start
// shift( ) : delete from start & return


myArr.push(6) // add new elements to the array 
myArr.push(7) // Output- [0, 1, 2, 3, 4, 5, 6, 7]
myArr.pop() // removes the last element
// console.log(myArr);

// myArr.unshift(30) // [ 30, 0, 1, 2,3,5,6]
// myArr.shift()


// console.log(myArr.includes(10)); // false
// console.log(myArr.indexOf(10)); // -1
// console.log(myArr.indexOf(2)); // 2

const newArray = myArr.join() // add array to string

// console.log(myArr);
// console.log(typeof newArray); // string

// difference between slice and splice:-
// SLICE- 1. does not modify the original array
//        2. returns a new array
//        3. ex-  slice( startIdx, endIdx )

// SPLICE- 1. modifies the originial array (add, remove, replace)
//         2. returns the removed elements as a new array
//         3. splice( startIdx, delCount, newEl1... )



console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);


// LOOPING OVER AN ARRAY-
  let chocolates = ["Cadbury Dairy Milk", "Kitkat", "5 Star", "Hide & Seek", "Eclairs", "Milky Way", "Amul Wafer Chocolates"]

  for (let i = 0; i<chocolates.length; i++){
    console.log(chocolates[i]);
  }


  let countries = ["india", "china", "japan", "netherlands", "america", "germany"];
  for (let country of countries){
    console.log(country.toUpperCase()); // INDIA, CHINA, JAPAN, NETHERLANDS,  AMERICA, GERMANY
  }