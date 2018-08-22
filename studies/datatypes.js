 
// 1. Number - any integer or floating point number 
var num = 143;
console.log(typeof num) // prints 'number'

//2.  String-  alphanumeric characters, written with quotes: 
var str = 'Check it out';
console.log(typeof str) // prints 'string'

// 3. Boolean- true or false 
console.log(5 > 7) //prints false

// 4.  Array- an indexed list of values, contained within brackets
var myArray = [12, 23, 47, 56];
console.log(Array.isArray(myArray)) //prints true

//5.  Object-  unordered collection of data with key/value pairs
var myObj = {1: 'first value', 2: 'second value', 3: 'third value'}
console.log(typeof myObj) //prints 'object'


// 6. Function- does something to parameters to produces a value
function justKidding (string){
    console.log(string + "...  jk!")
}
justKidding('I forgot how to invoke functions') 
//prints 'I forgot how to invoke functions... jk!'

//7. Undefined-  if a variable is initialized but not assigned
var udf;
console.log(udf) //prints undefined 

//8. null-  a keyword used to signify no value

//9. NaN- “Not a Number” means that the interpeter tried do arithmetic on something 
//that was not a number
 console.log(7 * 7) //prints 89
console.log(7 * 'seven') //prints NaN  


//10. Infinity and -Infinity (Google them if you don't know!)

 


//11. What is the difference between primitive/simple and complex data types?
/*Primitive datatypes are numbers, strings, booleans, null, and undefined.   
Complex data types are functions, objects and arrays.  */

//12. Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. 
//What does that mean, and how are they different?
// primitive values are passed by copy because they are immutable.   Copy by value
//means only a reference is stored in memory.


var shape = 'square'
var otherShape = shape

console.log(otherShape) // prints square

var shape = 'triangle'
console.log(otherShape) // still prints square

var myArr1= [1, 2, 3]
var myArr2 = myArr1

console.log(myArr2) // prints [1,2,3]

myArr1.push(3, 4, 5)

console.log(myArr2) //now prints [1,2,3,4,5]
