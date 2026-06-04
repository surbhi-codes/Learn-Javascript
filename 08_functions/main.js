// return → used to send value back from function
// console.log()-
// Purpose- Display output, Output usage- Cannot reuse, Function end- Continues execution, Value storage - Not possible

// return - 
// Purpose - Give result back, Output usage - Can reuse/store, Function end- Stops function immediately, Value storage- Possible

function add(x, y){
    let result = x + y;
    return result;
}

function subtract(x, y){
    return x - y;
}
function multiply(x, y){
    return x * y;
}
function divide(x, y){
    return x / y;
}

function isEven(number){
    // if(number % 2 === 0){
    //     return true;
    // } 
    // else {
    //     return false;
    // }  

    return number % 2 === 0 ? true : false;
}

function isValidEmail(email){

    // if(email.includes("@")){
    //     return true;
    // }
    // else{
    //     return false;
    // }
    
    return email.includes("@") ? true : false;
}
console.log(isValidEmail("surbhi@gmail.com"));
console.log(isValidEmail("rosegmail.com"));