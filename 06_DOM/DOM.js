// DOM - Document Object Model

// 1. DOM is a programming interface for web documents.
// 2. It represents the HTML or XML of a webpage as a tree structure where each node is an object.
// 3. JavaScript can interact with this structure to manipulate the content, structure, and style of web pages dynamically.
// 4. In the DOM, all HTML elements are defined as objects.

// 5. A property is a value that you can get or set (like changing the content of an HTML element).
// 6. A method is an action you can do (like add or deleting an HTML element).



// # Starter Code:-
//  <style> tag connects HTML with CSS
//  <script> tag connects HTML with JS


//  # Window Object:-
//  The window object represents an open window in a browser. It is browser’s object (not JavaScript’s) & is automatically created by browser.
//  It is a global object with lots of properties & methods.
 

// DOM Structure:-
// ~ Document: The root object representing the whole page.
// ~ Elements: Represent tags (e.g., <div>, <p>) in the HTML.
// ~ Attributes: Represent element properties (e.g., class, id).
// ~ Text: Represents the text inside an element.


// DOM MANIPULATION:-

// Important Properties-

//  tagName : returns tag for element nodes
//  innerText : returns the text content of the element and all its children
//  innerHTML : returns the plain text or HTML contents in the element
//  textContent : returns textual content even for hidden elements
//  element.attribute : new value	Change the attribute value of an HTML element
//  element.style.property : new style	Change the style of an HTML element
 


// Finding HTML Elements:-

// 1. document: Refers to the DOM itself.
// Example: document.getElementById("id")
    
// 2. element.childNodes: Gives a list of child nodes.

// 3. element.innerHTML: Accesses or changes the HTML inside an element.

// 4. element.style: Allows inline CSS manipulation.

// 5. element.setAttribute(): Sets a new attribute for an element.

// 6. document.createElement(): Creates a new HTML element.


// DOM METHODS:-

// 1. getElementById(id): Selects an element by its id - document.getElementById("myDiv");
    
// 2.  Selecting with class - document.getElementsByClassName("myClass");

// 3. Selecting with tag - document.getElementsByTagName(“p”);

// Query Selector:-
// 1. Selects the first element matching a CSS selector

// document.querySelector(“#myId / .myClass / tag”)
//  //returns first element
    
//  2. Selects all elements matching a CSS selector.

// document.querySelectorAll(“#myId / .myClass / tag”)
//  //returns a NodeList


// addEventListener(): Adds an event listener to an element.
// element.addEventListener("click", myFunction);

// element.setAttribute(attribute, value)	Change the attribute value of an HTML element
//for style-
// node.style



// Insert Elements:-   let el = document.createElement("div")

// 1. node.append( el ) //adds at the end of node (inside)
// 2. node.prepend( el ) //adds at the start of node (inside)
// 3. node.before( el ) //adds before the node (outside)
// 4. node.after( el ) //adds after the node (outside)

// Delete Element:-
// node.remove( ) //removes the node



// Creating Elements: Use createElement() to create new HTML elements.
// let newDiv = document.createElement("div");

// Appending Elements: Use appendChild() to add a new element
// document.body.appendChild(newDiv);

// Removing Elements: Use removeChild() to remove an element
// element.removeChild(child);

// document.replaceChild(new, old)	Replace an HTML element

// document.write(text)	Write into the HTML output stream
