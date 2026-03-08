// METHOD CHAINING - calling one method after another in one continuous line of code

let username = window.prompt("Enter your username: ");

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
// Removes spaces from start and end -> "   sURbhi   " → "sURbhi"
// charAt(0) → first letter -> toUpperCase() → makes it capital -> "s" → "S"
// slice(1) → takes string from index 1 to end -> toLowerCase() → converts remaining letters to small -> "URbhi" → "urbhi"
// Then they join
console.log(username);