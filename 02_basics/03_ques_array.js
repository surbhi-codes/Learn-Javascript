// Qs. For a given array with marks of students -> [85, 97, 44, 37, 76, 60] Find the average marks of the entire class.
let marks = [85, 97, 44, 37, 76, 60];

let sum = 0;

for (let value of marks) {
    sum += value;
}

let average = sum/ marks.length;
console.log(`average marks of the class = ${average}`); // average marks of the class = 66.5

/* Qs. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
 All items have an offer of 10% OFF on them. Change the array to store final price after
 applying offer */


 let items = [250, 645, 300, 900, 50];

 for (let i =0; i<items.length; i++) {
    let offer = items[i] / 10;
    items [i] -= offer;
 }

 console.log(items); // [ 225, 580.5, 270, 810, 45 ]


 //  Qs. Create an array to store companies -> “Bloomberg”, “Microsoft”, “Uber”, “Google”, “IBM”, “Netflix”
 // a. Remove the first company from the array
 // b. Remove Uber & Add Ola in its place
 // c. Add Amazon at the end

 let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
 companies.shift() // [ 'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix' ]
 companies.splice(2, 1, "Ola"); // [ 'Microsoft', 'Uber', 'Ola', 'IBM', 'Netflix' ]
 companies.push("Amazon"); // [ 'Microsoft', 'Uber', 'Ola', 'IBM', 'Netflix', 'Amazon' ]
 console.log(companies);
 
