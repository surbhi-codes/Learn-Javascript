// singleton 
// object.create
 
// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Surbhi",
    "full name": "Surbhi Jha",
    [mySym]: "mykey1",
    age: 18,
    location: "India",
    email: "surhi@amazon.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) // surhi@amazon.com
// console.log(JsUser["email"]) // surhi@amazon.com
// console.log((JsUser["full name"]));
// console.log(JsUser[mySym]) // mykey1

JsUser.email = "surbhi@google.com"
// Object.freeze(JsUser)
JsUser.email = "surbhi@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");    
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting()); // Hello JS user
console.log(JsUser.greetingTwo()); // Hello JS user, Surbhi

