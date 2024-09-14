// while (something is true) {     STATE
//     do something
// }



let index = 0

while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2
}
/* Output-
Value of index is 0
Value of index is 2
Value of index is 4
Value of index is 6
Value of index is 8
Value of index is 10
*/

let myArray = ['Tanjiro', 'Nezuko', 'Zenitsu']

let arr = 0
while (arr < myArray.length) {
   // console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}
/* Output
Value is Tanjiro
Value is Nezuko
Value is Zenitsu
*/


// let score = 1
let score = 11 // Score is 11

do {
    console.log(`Score is ${score}`);
    score ++
} while (score <= 10);