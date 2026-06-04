// LOOPS - for..in =  Iterates over enumerable properties of an object, giving you the keys.
// for (const key in object) { }


const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
// OUTPUT-
// js shortcut is for javascript
// cpp shortcut is for C++
// rb shortcut is for ruby
// swift shortcut is for swift by apple

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// The for...in loop is not suitable for iterating over a Map in JavaScript. Typically used for plain objects

// for (const key in map) {
//     console.log(key); 
// }