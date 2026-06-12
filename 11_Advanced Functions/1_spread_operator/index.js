/* spread operator - ... allows an iterable such as an array or string to be expanded into separate elements.
(unpack the elements)
*/
// ARRAY
/*
let numbers = [1, 2, 3, 4, 5];
 let maximum = Math.max(...numbers); -> 5
let minimum = Math.min(...numbers);   // -> 1
*/
// console.log(minimum);

// STRING

let userName = "Surbhi";
let letters = [...userName].join("-");

// console.log(letters); // S-u-r-b-h-i

let fruits = ["Litchi", "Mango", "Guava"];
let vegetables = ["Potato", "Tomato", "Carrot"];

let foods = [...fruits, ...vegetables, "egg", "milk"];

// console.log(foods);

/* Rest parameter `...` collects multiple arguments into a single array.
It looks exactly like the spread operator, but it does the exact opposite: instead of unpacking an array, it packs values _into_ an array.
*/

function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}

//const total  = sum(1, 2, 3, 4, 5);
// console.log(`Your total is $${total}`);


function getAverage(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
}

const total = getAverage(75, 100, 85, 90, 50);
// console.log(total);



function combineStrings(...strings){
    return strings.join(" ");
}

const fullName = combineStrings("Er.", "Surbhi", "Jha");
console.log(fullName);