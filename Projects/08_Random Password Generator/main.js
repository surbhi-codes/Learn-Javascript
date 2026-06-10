// RANDOM PASSWORD GENERATOR

function generatePassword( length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
 const lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
 const uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 const numberChar = "0123456789";
 const symbolChar = "!@#$%&*+-";

 let allowedChars = "";
 let password = "";

 allowedChars += includeLowercase ? lowercaseChar : "";
 allowedChars += includeUppercase ? uppercaseChar : "";
 allowedChars += includeNumbers ? numberChar : "";
 allowedChars += includeSymbols ? symbolChar : "";

if(length <= 0){
    return (`Password length must be atleast 1`);
}
if(allowedChars.length === 0){
    return(`At least 1 set of character needs to be selected`);
}
 
for(let i = 0; i < length; i++){
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
}
 return password;
}

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

                                                                