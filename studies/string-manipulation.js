//String manipulation
//with operators
var myStr = "This guy"
myStr += " is a clown."  //concatenates “ is a clown.” to the end of myStr
console.log(myStr) // prints "this guy is a clown"

//With methods
var newStr = myStr.replace('clown.', 'great developer!') //replaces clown with great developer!
console.log(newStr) // prints 'This guy is a great developer!'

var newestStr = newStr.slice(0, 13) + ' ' + newStr.slice(20)
console.log(newestStr) //prints 'This guy is a developer!'

var capString = newestStr.toUpperCase(); 
console.log(capString) // prints 'THIS GUY IS A DEVELOPER!'

var lowString = capString.toLowerCase();
console.log(lowString)//prints 'this guy is a developer!'

var arrString = lowString.split(" "); 
console.log(arrString) //prints ['this', 'guy', 'is', 'a', 'developer!']

var backToString = arrString.join(' ');
console.log(backToString) //prints 'this guy is a developer!'


