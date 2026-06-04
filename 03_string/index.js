// strings methods = allow you to manipulate and work with text (strings)
// string.slice(start, end)

// let userName = "Surbhi";

// console.log(userName.charAt(0)); 
// charAt() -> returns the character at a specific indexA.

// console.log(userName.indexOf("i"));
// indexOf() → finds the position of a character or substring inside a string.

// console.log(userName.lastIndexOf("r")); 
// lastIndexOf() → finds last position of a character/substring

// console.log(userName.length); 
// length → tells total number of characters

// let userName = "   Surbhi";
// userName = userName.trim(); // trim() removes extra spaces from the beginning and end of a string.
// console.log(userName);

// let userName = "surbhi";
// userName = userName.toLowerCase();
// userName = userName.toUpperCase();

// userName = userName.repeat(5);
//console.log(userName);

let myName = "Ab  hi  ";

// All three are built-in JavaScript string methods - they just check different positions.
// let result = myName.startsWith(" "); Checks if the string starts with a space.
// let result = myName.endsWith(" ");  Checks if the string ends with a space.
  let result = myName.includes(" "); // Checks if the string contains a space anywhere.

if(result) {
    console.log("Your name can't include with ' '");
}
else {
    console.log(myName);
}

let phoneNumber = "123-456-7890";
 
// phoneNumber = phoneNumber.replaceAll("-", "/");
// phoneNumber = phoneNumber.padStart(15, "0");
phoneNumber = phoneNumber.padEnd(15, "0");
console.log(phoneNumber);

// slice() is used to extract specific parts of a string based on position or pattern.

const fullName = "Surbhi Jha";

// let firstName = fullName.slice(0, 3); slice(0,3) → characters from index 0 to 2 → "Sur"

// let lastName = fullName.slice(4, 6); slice(4,6) → characters from index 4 to 5 → "hi"


let firstChar = fullName.slice(0, 1); // slice(0,1) → first character → "S"

let lastChar = fullName.slice(-1); // slice(-1) → last character → "a"

// To split first and last name properly
// .slice(startIndex, endIndex) 
let firstName = fullName.slice(0, fullName.indexOf(" ")); 
// Start from 0 and take everything. indexOf(" ") → 6 So it becomes: slice(0,6) Start at 0 and stop before 6.
// output- Surbhi
let lastName = fullName.slice(fullName.indexOf(" ") + 1);
// indexOf(" ") → 6
// 6 + 1 = 7 slice(7) Start from 7 and take everything till the end.
// output - Jha

// 0 → start from beginning
// indexOf(" ") → find the space
// +1 → skip the space and start the last name
// So the code splits the full name into first name and last name.
console.log(firstName);
console.log(lastName);

const email = "Surbhi22@gmail.com";
let userName = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);
console.log(userName);
console.log(extension);
