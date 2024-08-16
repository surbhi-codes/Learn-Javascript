// const tinderUser = new Object() // {} singleton 
const tinderUser = {} // non-singelton oject

tinderUser.id = "456def"
tinderUser.name = "Rudra"
tinderUser.isLoggedIn = false

// console.log(tinderUser); // { id: '456def', name: 'Rudra', isLoggedIn: false }

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

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
//const obj4 = {5: "a", 6: "b"}

const obj3 = { obj1, obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
]
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "surbhi"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "surbhi",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]