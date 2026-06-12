// RANDOM PASSWORD GENERATOR

function generatePassword( length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) 

// This declares a function that takes five parameters: how long the password should be (length), and four booleans (true/false values) telling it whether to include lowercase letters, uppercase letters, numbers, and symbols respectively.

{
 const lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
 const uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 const numberChar = "0123456789";
 const symbolChar = "!@#$%&*+-";

 // These are just strings containing every possible character from each category. Strings in JavaScript can be indexed like arrays (e.g. lowercaseChar[0] is "a"), which becomes important later.

 // Building the pool of allowed characters

 let allowedChars = "";
 let password = "";

 allowedChars += includeLowercase ? lowercaseChar : "";
 allowedChars += includeUppercase ? uppercaseChar : "";
 allowedChars += includeNumbers ? numberChar : "";
 allowedChars += includeSymbols ? symbolChar : "";

 // allowedChars starts empty, then for each category it uses a ternary operator (condition ? valueIfTrue : valueIfFalse) to decide whether to add that category's characters. For example, includeLowercase ? lowercaseChar : "" means "if includeLowercase is true, add the lowercase letters; otherwise add nothing (an empty string)." The += appends whatever is returned onto allowedChars.

 // So if all four flags are true, by the end allowedChars contains all lowercase letters, all uppercase letters, all digits, and all symbols concatenated into one long string — this is the "pool" the function will randomly pick from.
    
if(length <= 0){
    return (`Password length must be atleast 1`);
}
if(allowedChars.length === 0){
    return(`At least 1 set of character needs to be selected`);
}
 
/* Before generating anything, the function checks two error conditions:
If length is 0 or negative, it returns an error message immediately (the function stops here via return).
If allowedChars is still empty — meaning all four include... flags were false — it returns a different error message, since there'd be nothing to pick characters from.
*/

for(let i = 0; i < length; i++){
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
}

/* This loop runs length times (once per character we need in the final password). Each iteration:

Math.random() produces a random decimal number between 0 (inclusive) and 1 (exclusive), e.g. 0.7283.
Multiplying by allowedChars.length scales that into the range [0, allowedChars.length). So if allowedChars has 70 characters, this gives something like 0 to 69.999....
Math.floor() rounds down to the nearest whole number, giving a valid index into allowedChars (e.g. 0 to 69).
allowedChars[randomIndex] picks out the character at that index.
password += ... appends that character to the password string being built.

After the loop runs length times, password is a string of length randomly chosen characters from the allowed pool.
*/

 return password;
}

// This sends the finished password string back to wherever the function was called from.

//Calling the function
const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength,
                                includeLowercase,
                                includeUppercase,
                                includeNumbers,
                                includeSymbols);
console.log(`Generate Password: ${password}`);

// This sets up the desired configuration (12 characters long, all four character types included), calls generatePassword with those values, stores the result in password, and then prints it out using a template literal that embeds the value with ${password}.                                                                