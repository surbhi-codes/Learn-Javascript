//push(): Modifies the original array by adding elements to it.
// concat(): Creates a new array by combining elements without modifying the original array.

// Concat( ) : joins multiple arrays & returns result
// Unshift( ) : add to start
// shift( ) : delete from start & return


const marvel_heros = ["Ironman", "Spiderman", "Thor"]
const dc_heros = ["Superman", "flash", "batman"]

//marvel_heros.push(dc_heros)

// console.log(marvel_heros); // [ 'Ironman', 'Spiderman', 'Thor', [ 'Superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3], [1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros); // ['Ironman','Spiderman','Thor',[ 'Superman', 'flash', 'batman' ],'Superman','flash','batman']

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros); // [ 'Ironman', 'Spiderman', 'Thor', 'Superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// console.log(another_array); // [ 1, 2, 3, [ 4, 5, 6 ], 7, [ 6, 7, [ 4, 5 ] ] ]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4,5 ]

console.log(Array.isArray("Surbhi")); // false
console.log(Array.from("Surbhi")); // [ 'S', 'u', 'r', 'b', 'h', 'i' ]
console.log(Array.from({name: "Surbhi"})); // [] interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]




 