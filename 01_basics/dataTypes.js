/*                          -: DATATYPES :-
  Data types specify the kind of data that can be stored and manipulated within a program     
*/
// 1.Primitive data types:- simple,non-modifiable, stored by value
    // number => 2 to power 53 ( Integers, floats)
    // bigint => large int
    // String => "Hello Surbhi"
    // Booleans => 'true' /'false'
    // Null => standalone value/empty value or no value
    // Undefined => a declared variable without a value
    // Symbol => A unique  & immutable value
    
//  there are so-called “special numeric values” which also belong to this data type: Infinity, -Infinity and NaN.

//     2.Non-primitive data types(Object References):- complex, modifiable, stored by reference
        //Objects (Collections of key-value pairs)
        //Arrays (Ordered collections of elements)
        // Functions
        
 "use strict"; // treat all JS code as newer version / modern way [should always be at top of your script]

 // alert( 3 + 3) // we are using nodejs, not browser
    
     console.log(2 
        +
        2
        /*
        In JavaScript, there are 3 types of quotes
        Double quotes: "Hello".
        Single quotes: 'Hello'.
        Backticks: `Hello`.
        */

      ); //  code readability should be high



      let num = 300; // Number
      let price = 30.5;

      let bigInt = 9076655445132436576n; // Bigint

      let greeting = "Hello"; // String
      let message = "Bye";

      let inProgress = true; // Boolean
      let completed = false;

      let x = null;
      console.log(null == undefined); // Null

      let y;
      console.log(y); // Undefined

      const id = Symbol('123');
      const anotherId = Symbol('123');

      console.log(id === anotherId);

      // Array, Ojects, Functions

      const heros = ["spiderman", "ironman", "superman"];
      let myobj = {
        name: "surbhi",
        age: "10",
      }

       const myFunction = function(){
         console.log("Hello world");
       }

       console.log(typeof anotherId);


      // The typeof operator allows us to see which type is stored in a variable.
    //   object
     console.log(typeof undefined); // undefined
     console.log(typeof null); // object

     typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)