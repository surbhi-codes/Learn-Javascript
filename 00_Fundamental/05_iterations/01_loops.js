// For Loops-
//      start  end  change
// for ( i =0; i<2; i++ ){    ITERATE
//          do something
// }

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5){
       console.log("5 is best number"); // 5 is best number
    }
    console.log(element); // 0,1,2,3,4,5 is best number, 6,7,8,9,10
    
}
// console.log(element); // ReferenceError: element is not defined


for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`Inner loop value ${j} and inner loop ${i}`);
    console.log(i + '*' + j + '=' + i*j);
    } 
    
}


let myArray = ["C", "Java", "Python"]
console.log(myArray.length); // 3
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}


// break and continue

for (let index = 1; index <= 20; index++) {
   if (index == 5) {
    console.log(`Detected 5`);
    break
   }
   console.log(`Value of i is ${index}`);
   
}
/* Value of i is 1
Value of i is 2
Value of i is 3
Value of i is 4
Detected 5 */


for (let index = 1; index <= 20; index++) {
   if (index == 5) {
    console.log(`Detected 5`);
    continue
   }
   console.log(`Value of i is ${index}`);   
}

/*
Value of i is 1
Value of i is 2
Value of i is 3
Value of i is 4
Detected 5
Value of i is 6
Value of i is 7
Value of i is 8
Value of i is 9
Value of i is 10
Value of i is 11
Value of i is 12
Value of i is 13
Value of i is 14
Value of i is 15
Value of i is 16
Value of i is 17
Value of i is 18
Value of i is 19
Value of i is 20
*/
