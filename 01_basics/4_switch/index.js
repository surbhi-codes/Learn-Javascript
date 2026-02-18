// SWITCH = used when we have multiple possible conditoins for one variable
// cleaner than using many else if statements

let testScore = 80;
let letterGrade;

switch(true){
    case testScore >= 90:
    letterGrade = "A";
    break;

    case testScore >= 80:
    letterGrade = "B";
    break;

    case testScore >= 70:
    letterGrade = "C";
    break;

    case testScore >= 60:
    letterGrade = "D";
    break;
    
    case testScore >= 50:
    letterGrade = "E";
    break;

    default:
        letterGrade = "F";
}
console.log(letterGrade);