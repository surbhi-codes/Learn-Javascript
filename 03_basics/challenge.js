// 1. Life in weeks coding Exercise-

function lifeInWeeks(age) {
    let yearsRemaining = 90 - age;
    let days = yearsRemaining * 365;
    let weeks = yearsRemaining * 52;
    let months = yearsRemaining * 12;

    console.log("You have " + days + " days, " + weeks+
" weeks, and " + months + " months left"    );
}

lifeInWeeks(21); // You have 25185 days, 3588 weeks, and 828 months left

// 2.  BMI Calculator Code-

function bmiCalculator(weight, height) {
    var bmi = weight / (height * height);
    return Math.round(bmi);  // Rounding off the result
}

// Test the function
var bmi = bmiCalculator(65, 1.8);  // Example: 65kg weight, 1.8m height
console.log("Your BMI is: " + bmi); // Your BMI is: 20


// 3. Love Calculator-

// Simple Love Calculator with name input

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter your name: ', (yourName) => {
    readline.question('Enter their name: ', (theirName) => {
        var loveScore = Math.random() * 100;
        loveScore = Math.floor(loveScore) + 1;  // 1 to 100
        
        console.log(`${yourName} and ${theirName}'s love score is ${loveScore}%`);
        readline.close();
    });
});


// 4. Leap Year Challange-

function isLeap(year){
    if (year % 4 === 0){
        if (year % 100 === 0){
            if (year % 400 === 0){
                return "Leap Year.";
            } else {
                return "Not Leap Year";
            }
        } else {
            return "Not Leap Year";
        }
    } else {
        return "Not Leap Year";
    }
    
}

isLeap(year);

