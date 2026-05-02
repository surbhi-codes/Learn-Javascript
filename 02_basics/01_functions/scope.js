// Variable Scope = Scope determines the accessibility (visibility) of variables.
// If a variable is "in scope," you can use it; if it is "out of scope," it is invisible and inaccessible.
// The Three Main Scopes

// 1. Global Scope-
// Variables declared outside of any function or curly braces {}.
// Accessibility: Everywhere in your code.
// Lifetime: They last as long as the application is running.

// In JS, Local Scope is usually divided into the two categories: Function Scope and Block Scope.

// 2. Function Scope
// Variables declared inside a function.
// Accessibility: Only inside that specific function.
// Note: Variables declared with var, let, or const are all function-scoped when inside a function.

// 3. Block Scope
// Variables declared inside curly braces {} (like an if statement or a for loop).
// Accessibility: Only inside those braces.
// Important: Only let and const are block-scoped. var ignores block scope and "leaks" out to the function or global level

// Lexical Scope (Scope Chain)
// JavaScript uses Lexical Scoping, which means the placement of the variable in the source code determines its scope.

let  x = 3;

function2();

function function1() {
    let x = 1;
    console.log(x);
}

function function2() {
    let x = 2;
    console.log(x);
}

// Variable Shadowing
// Even though you used the name x three times, JavaScript treats them as three completely different variables because they live in different "boxes" (scopes). When you define a local variable with the same name as a global one, the local one "shadows" the global one inside that function.