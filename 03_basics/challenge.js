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



