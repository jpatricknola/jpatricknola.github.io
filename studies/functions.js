//Functions
//1. The two phases to using functions: First we must declare it? Next we can execute 
//(or two other words for executing a function?) a function by calling or invokint it.

function plusOne (num) {
    console.log(num + 1)
} // declare plusOne function

plusOne(1) // call plusOne function, prints 2


/*2. What’s the difference between a function’s parameters and arguments PASSED 
to a function? */
/*Parameters are placeholders used for declaring function, arguments are values 
that get operated on when calling functions */
function plusTwo (num){
    console.log(num + 2)
} // num is a parameter
plusTwo(2)// 2 is an argument.  prints 4 to the console

//3. What’s the syntax for a NAMED function?
/*the word 'function', followed by the name of the function, followed by parameters
in parenthesis, followed by the statement(s) in squigs. */

//4. How do we assign a function to a variable?
var timesTwo = function (param){
    console.log(param*2)
}

timesTwo(10) // prints 20

/*5. Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. 
How do we specify inputs, and how do we specify outputs? */
//Inputs are specified by parameters, output is specified by return statement.
function inLove(nameOne, nameTwo) { 
    return nameOne + ' and ' + nameTwo + ' sitting in a tree, K-I-S-S-I-N-G'
}

//6. Scope: Functions can see and modify variables in parent or global scopes. 
//The inverse is NOT true.

function makeGreen1(color){
    var c = 'green' ;
    return function(){
        console.log(c)
    }
} //prints green.  var c defined in in parent scope is accessible in nested scope,
//while switching lines 43 and 45 produces a reference error.


/*7. Closures: Functions form closures around the data they house. If an object 
returned from the Function and is held in memory somewhere (referenced), that closure 
stays ALIVE, and data can continue to exist in these closures! (See: our 
meeting-room app for an example!) 


A closure is an inner function that has access to the outer functions variables

3 scope chains: access to its own scope, access to the outer function variables,
global variables.

Also has access to the outer functions parameters

Inner function cannot call outer functions arguments but can call the parameters

Closures have access to outer functions variables even after outer function returns
Closures store references to outer functions variables, do not store actual value

*/

function itsAFunc(string1){
    let parentScopeVariable = string1;
    return function(anotherString){
        let newString = parentScopeVariable + " " + anotherString;
        return newString
    }
}
// inner function is a closure because it accesses variable from outer function