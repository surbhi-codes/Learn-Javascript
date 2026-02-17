// String concatenation is the process of joining two or more strings together to form a single string
// In JS string concatenation can be done using the '+' operator
// "a" "+" "+" "b" becomes "ab" concatenated into a single string


//const name = "surbhi"
const repoCount = 50

// console.log(name + repoCount + "Value"); Outdated syntax

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String(`surbhi-sh-com`)

// console.log(gameName[0]); 
// console.log(gameName.__proto__);

// console.log(gameName.length); // 13
// console.log(gameName.toUpperCase()); // SURBHI-SH-COM

console.log(gameName.charAt(2)); // position - r
console.log(gameName.indexOf('i')); // 5

const newString = gameName.substring(0,4) // surb
console.log(newString);

 const anotherString = gameName.slice(-7, 4)
 console.log(anotherString);

const newStringOne = "   surbhi    "
console.log(newStringOne);
console.log(newStringOne.trim()); // trims unnecessary space

const url = "https://surbhi.com/surbhi%20jha"

console.log(url.replace('%20', '-')); // https://surbhi.com/surbhi-jha

console.log(url.includes('sundar')); // false
console.log(gameName.split('-')); // [ 'surbhi', 'sh', 'com' ]



