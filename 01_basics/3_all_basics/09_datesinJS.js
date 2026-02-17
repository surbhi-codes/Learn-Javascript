 // Dates-

 let myDate = new Date()
 // console.log(myDate);

//  console.log(myDate.toString()); // Sun Aug 11 2024 06:37:20 GMT+0530 (India Standard Time)
//  console.log(myDate.toDateString()); // Sun Aug 11 2024
//  console.log(myDate.toISOString()); // 024-08-11T01:11:05.709Z
//  console.log(myDate.toJSON()); // 2024-08-11T01:12:24.876Z
//  console.log(myDate.toLocaleString()); // 8/11/2024, 6:43:14 AM
//  console.log(myDate.toLocaleDateString()); // 8/11/2024
//  console.log(myDate.toLocaleTimeString()); // 6:47:50 AM
//  console.log(myDate.toTimeString()); // 06:48:37 GMT+0530 (India Standard Time)
//  console.log(typeof myDate); // object


// let myCreatedDate = new Date(2023, 0, 23) // Mon Jan 23 2023
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023, 0, 23, 5, 3) // 1/23/2023, 5:03:00 AM
// let myCreatedDate = new Date ("2023-01-14") // 1/14/2023, 5:30:00 AM
let myCreatedDate = new Date ("01-14-2023") // 1/14/2023, 12:00:00 AM
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now() 

// console.log(myTimeStamp);// 1723340613062
// console.log(myCreatedDate.getTime()); // 1673634600000
// console.log(Date.now()/1000);// 1723340837.872
// console.log(Math.floor(Date.now()/1000));// 1723341791

let newDate = new Date()
console.log(newDate); // 2024-08-11T02:05:54.287Z
console.log(newDate.getMonth()); // 7
console.log(newDate.getMonth() + 1); // 8
console.log(newDate.getDay()); // 0 - Sunday
console.log(newDate.getDay() + 1); // 1


// `${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday: "long"
})