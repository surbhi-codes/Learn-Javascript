// LOOPS- forEach(): A method that calls a provided function once for each element in an array, giving you the values.
// array.forEach(value => { })


const coding = ["js", "java","cpp", "python", "ruby"]

coding.forEach(function (val) {
   // console.log(val);
})

// coding.forEach( (item) => {
//     console.log(item); 
// })

function printMe(item){
    console.log(item);   
}
coding.forEach(printMe);

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})

// Output-
// js 0 [ 'js', 'java', 'cpp', 'python', 'ruby' ]
// java 1 [ 'js', 'java', 'cpp', 'python', 'ruby' ]
// cpp 2 [ 'js', 'java', 'cpp', 'python', 'ruby' ]
// python 3 [ 'js', 'java', 'cpp', 'python', 'ruby' ]
// ruby 4 [ 'js', 'java', 'cpp', 'python', 'ruby' ]


const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
   console.log(item.languageName);
})

// Output-
// Javascript
// Java
// Python