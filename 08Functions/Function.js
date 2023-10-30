// ------------ Function --------------

function myFunction(username = "Ram") {
    return console.log(`${username} is just logged in.`)
}

// Note -->> username is a parameter which is passed during function defination.

// -------- Calling a function ------------

myFunction("Ankit Choubey"); //Here "Ankit Choubey" is an Argument.
myFunction(); // here no arguments is passed so default values come as argument.


// Passing mltiple unknown parameters 

/* 
This situation can be handle using  rest operator (...parameter).
Remeber you've earlier learn it as spread operator in objects,etc.
But saying it as spread operator and rest operator is totally depend upon in its use case.

---->> example

function passingMultipleParameter(...parameter){
    return console.log(parameter);
}

-->> Aboove function will return all the parameter passed as attributes.

*/

function passingMultipleParameter(...parameter){
    return console.log(parameter);
}

passingMultipleParameter(200,12,34,56,788,"Ankit");