/*
-------------- Js Execution Context ---------------
1. Global execution Context
2. Function execution Context
3. Eval execution Context

-------------- Phases of Execution -----------------
1. Memory creation phase : All the 
2. Execution phase

-------------- Steps involved in running a code-----------

Let Suppose we want to run a function

function addTwoNum(num1,num2){
    return console.log(num1+num2);
}

addTwoNum(23,12);

---------->> Steps
1. Global Execution-->(this) : Every code will first go to global execution.

2. Memory Phase : variable, function defination will be store here.

3. Execution Phase: if there is any function then it will create a seperate execution enviroment.then again perform 1.Memory Creation phase and execution Phase then this sepearate enviroment get deleted automatically and then values return to the global enviroment.

Callstack : Totally working on LIFO.



*/