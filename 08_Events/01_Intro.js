// EVENTS IN JS:-
//  The change in the state of an object is known as an Event
// Events are fired to notify code of "interesting changes" that may affect code execution


// EVENTS TYPE:-
// Mouse events (click, double click, mousemove, mouseover, mouseout)
//  Keyboard events (keypress, keyup, keydown)
//  Form events (submit etc.)
//  Print event & many more


// EVENT HANDLING in JS:-
 node.event = () => {
    // handle here
    }

// Example
btn.onclick = ( ) => {
    console.log("btn was clicked");
}   

// EVENT OBJECTS:-
// When an event occurs, an event object is automatically passed to the event handler, containing information about the event (like the target element, type of event, and more).

node.event = (event) => {
    //handle here
}   

// properties of the event object-
// event.target, event.type, event.preventDefault(), event.stopPropagation()

//  Inline Event Handlers:- attach events directly in HTML by using inline event attributes.
// <button onclick="alert('Button clicked!')">Click me</button>


// EVENT LISTENERS:-
// An event listener is a function that waits for a specific event to happen and then executes a callback function in response. It can be added to any DOM element using addEventListener().

element.addEventListener('eventType', functionName);

document.querySelector('button').addEventListener('click', function() {
    alert('Button clicked!');
  });

  
  // REMOVING EVENT LISTENERS:- node.removeEventListener( event, callback )

  function logClick() {
    console.log('Element clicked!');
  }
  element.addEventListener('click', logClick);
  element.removeEventListener('click', logClick); // Removes the event listener
  
  // Note : the callback reference should be same to remove 

