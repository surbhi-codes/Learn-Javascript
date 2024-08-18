// const tinderUser = new Object() // {} singleton 
const tinderUser = {} // non-singelton oject

tinderUser.id = "456def"
tinderUser.name = "Lily"
tinderUser.isLoggedIn = false

// console.log(tinderUser); // { id: '456def', name: 'Lily', isLoggedIn: false }

const regularUser = {
    email: "subhi@gmail.com",
    fullname:{
        userfullname:{
        firstname: "Surbhi",
        lastname: "Jha",
     }
}
}
// console.log(regularUser.fullname);// { userfullname: { firstname: 'Surbhi', lastname: 'Jha' } }
// console.log(regularUser.fullname.userfullname);// { firstname: 'Surbhi', lastname: 'Jha' }
// console.log(regularUser.fullname.userfullname.firstname); // Surbhi

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}
const obj3 = {5: "a", 6:"b"}

//const obj4 = {obj1, obj2}
// const obj4 = Object.assign({}, obj1, obj2, obj3) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

 const obj4 = {...obj1, ...obj2}
 // console.log(obj4); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

 const users = [
    {
        id: 1,
        email:"s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id:1,
        email: "s@gmail.com"
    },
 ]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser));// [ '456def', 'Lily', false ]
// console.log(Object.entries(tinderUser)); // [ [ 'id', '456def' ], [ 'name', 'Lily' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh sir"
}

// course.courseInstructor

const {courseInstructor:instructor} = course

console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh sir",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]