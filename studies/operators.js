/* Operators
 
1. Assignment operator:   the equal sign =
2. Arithmetic operators: Addition(+), Subtraction(-), Multiplication (*), 
Division (/), Remainder (%)
3. Comparison Operators: greater than (>), less than (<), greater than or equal to (>=),
less than or equal to (<=), abstract equality (==), strictly equal (===), 
not strictly equal (!==), not abstract equal (!=)
4. Logical operators: && (if both are true), if either are true ||, ! (not)

5. Unary operators (!, typeOf, -) */
console.log(typeof 7) //returns number
console.log(typeof 'words') //returns string

console.log(7!== 8) //prints true, 7 is not equal to 8


//6. Ternary operator (a ? b : c) ;
// Often used as a shortcut for if statements

function isFizzBuzz(name) {
  console.log((name === "FizzBuzz") ? "yes" : "no")
}

var lastName = 'FizzBuzz'
var firstName = "Cody"

isFizzBuzz(lastName) //prints yes
isFizzBuzz(firstName)// prints no