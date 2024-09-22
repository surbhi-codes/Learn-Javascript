// Qs Create a H2 heading element with text - “Hello JavaScript”. Append “from Apna College students” to this text using JS.

//sol:-
// let h2 = document.querySelector("h2");

// console.dir(h2.innerText);
// h2.innerText = h2.innerText + " from computer science students";

//  Qs. Create 3 divs with common class name - “box”. Access them & add some unique text to each of them.

// sol:-
 let divs = document.querySelectorAll(".box");

// let i = 1;
// for (div of divs) {
//         div.innerText = `new unique value ${i}`;
//         i++;
// }

// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";
// divs[2].innerText = "new unique value 3";



let div = document.querySelector("div");

div.style.backgroundColor = "red";
div.style.fontSize = "25px";
div.innerText = "Hello World!";  