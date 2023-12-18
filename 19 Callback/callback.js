// Callback : It is a function which passed into another function as a arguments.

function greetings() {
  console.log("Good morning");
}

function callingGreeting(hello) {
    greetings();

}

callingGreeting(greetings)
