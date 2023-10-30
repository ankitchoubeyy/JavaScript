let myObject = {
    name : "Ankit",
    rollNo : 5,
}

// -------- Pasing objects in a function as a argument --------

function passingObject(object){
    return console.log(`${object.name} is my name and my roll no is ${object.rollNo}`)
}

passingObject(myObject);


// -------- Pasing array in a function as a argument--------

let myArray = [12,34,56,78]


function passingArray(array){
    return console.log(array[2])
}

passingArray(myArray);