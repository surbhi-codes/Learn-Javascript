let fullName = "Anya";
let isStudent = true;
let score = 99;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `Enrolled: ${isStudent}`;
document.getElementById("p3").textContent = score;

// How to accept user input-

// 1. Easy way = window prompt
// 2. Professional way = HTML textbox

// let username = window.prompt("What's your name?");
// console.log(username);

let username;
document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`;
}

// const = a variable that can't be changed

const PI = 3.14159;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function(){
  radius = document.getElementById("myText").value;
  radius = Number(radius);
  circumference = 2 * PI * radius;
  document.getElementById("myH3").textContent = circumference + "cm";
}
