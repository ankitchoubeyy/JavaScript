/* What is this?
In JavaScript, the this keyword refers to an object.

Which object depends on how this is being invoked (used or called).

The this keyword refers to different objects depending on how it is used:

In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.

*/

let myObject = {
    name:"xyz",
    phone:"233456778",
    message: function(){
        console.log(`welcome ${this.name} to our website`) // "this" keyword is used to access the curent context of the object.
    }
}
myObject.message()

// Global Context

console.log(this); // in node it will return nothing, but in browser it will return multiple elements of browser engine.