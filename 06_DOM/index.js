// Qs Create a H2 heading element with text - “Hello JavaScript”. Append “from Apna College students” to this text using JS.

//sol:-
// let h2 = document.querySelector("h2");

// console.dir(h2.innerText);
// h2.innerText = h2.innerText + " from computer science students";

//  Qs. Create 3 divs with common class name - “box”. Access them & add some unique text to each of them.

// sol:-
 // let divs = document.querySelectorAll(".box");

// let i = 1;
// for (div of divs) {
//         div.innerText = `new unique value ${i}`;
//         i++;
// }

// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";
// divs[2].innerText = "new unique value 3";



// let div = document.querySelector("div");

// div.style.backgroundColor = "red";
// div.style.fontSize = "25px";
// div.innerText = "Hello World!";  

// let newBtn = document.createElement("button");
// newBtn.innerText = "click me!";
// console.log(newBtn);


// let div = document.querySelector("div");
// div.append(newBtn);

// let div = document.querySelector("div");
// div.prepend(newBtn);

// let div = document.querySelector("div");
// div.before(newBtn);

//  let div = document.querySelector("div");
//  div.after(newBtn);

//  let p = document.querySelector("p");
//  p.after(newBtn);


// INSERT ELEMENTS-
 let newHeading = document.createElement("h1");
 newHeading.innerHTML = "<i> Hi, I am a CS Student";

 document.querySelector("body").prepend(newHeading);

// DELETE ELEMENTS-
// let para = document.querySelector("p");
// para.remove();

// newHeading.remove();


// Qs. Create a new button element. Give it a text “click me”, background color of red & text color of white.
// Insert the button as the first element inside the body tag

//sol:-
let newBtn = document.createElement("button");
newBtn.innerText = "Click Me!";

newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newBtn);