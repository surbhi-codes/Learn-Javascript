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
