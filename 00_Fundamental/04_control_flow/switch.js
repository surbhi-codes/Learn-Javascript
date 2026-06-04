// The switch statement in JavaScript is used to execute different code blocks based on the value of a variable.

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


const month = 3

switch (month) {
    case 1: 
    console.log("April");
    break;

    case 2:
        console.log("June");
        break;

    case 3:
        console.log("July");
        break;

    case 4:
        console.log("August");
        break;

    case 5:
        console.log("December");
        break;
    
        default:
        console.log("default case match");
        break;
}



const day = "Sunday";

switch (day) {
   case "Monday":
    console.log("Monday");
    break;

   case "Sunday":
    console.log("Sunday");
    break;

   case "Wednesday":
    console.log("Wednesday");
    break;

   case "Saturday":
    console.log("Saturday");
    break;

   case "Tuesday":
    console.log("Tuesday");
    break;
    
    default:
        console.log("It's a regular day");
        break;
}