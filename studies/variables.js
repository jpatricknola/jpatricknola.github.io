/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.
 Variables are named identifiers that can point to values of a particular type, 
 like a Number, String, Boolean, Array, Object or another data-type.  Variables 
 are called so because once created, we can CHANGE the value (and type of value) 
 to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) 
 for our variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization 
 (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have 
 NOT initialized it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this 
//with constants 
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/* VAR, LET, and CONST

Var let and const are containers for values.   Var is hoisted and is contained 
within global or functional (local) scope.    Let and const are contained in block
scope and not hoisted.  Let can declared before being assigned and can be resigned, 
while const must be assigned when declared and cannot be reassigned.  

HOISTING:
Hoisting determines when/where variables can be accessed.  Var is hoisted 
to the top of the scope (either global or functional) meaning that its declaration 
is read first no matter what line its on.   However, values for variables are not 
hoisted,so the variable will be undefined until it is assigned a value. 

Variables declared with const and let are not hoisted.  Therefore they can only be 
accessed within the scope in which they are declared and must be declared before
being referenced.  

A variable declared without var, const, or let will be hoisted to global scope.
*/

console.log(a); // prints undefined because declaration is hoisted but not the value
var a = 7;
console.log(a); // prints 7
a = 8;
console.log(a); //prints 8 because var can be reassigned


//console.log(b) would print an error because declaration is not hoisted
let b = 7;
b = 8;
console.log(b); //prints 8 because let can be reassigned 


//console.log(c) would print an error because declaration is not hoisted
const c = 100; 
console.log(c);  
//c = 200 would print an error because const cannot be reassigned