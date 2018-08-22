//Loops

/* 1. Explain while, for, and for-in loops
For loops loop through data using a variable declared to a number, a parameter 
that sets the stopping point, and a value determining the iteration.   
While loops are similar, a variable is declared, and the while block of code loops 
a long as the condition is true.   A for in loop loop through an object using the
keys of the object.

2. Be able to loop any number of times, forward counting up to some limit, 
backward counting down to 0 */

var myString = "How to loop thru a string";
for (var i = 0; i < myString.length; i++){
    console.log(myString[i])
}//prints each character forward

for (var i = myString.length-1; i>=0; i--){
    console.log(myString[i])
};

var count = 20
while (count > 0){ 
    console.log(count); 
    count --} //prints from 20 down to 1

//3. Loop over an Array, forwards and backwards
var myArr = [123, 456, 789, 999]
for (var i = 0; i < myArr.length; i++) {
    console.log(myArr[i])// prints each element of the Array
}
for (var i=myArr.length-1; i >= 0; i--){
    console.log(myArr[i])// prints elements of the Array backward
}


//4. Loop over an Object
var myObj = {'key 1': "value 1",
            'key 2': "value 2",
            'key 3': "value 3",}
for (var key in myObj){
    console.log(key)//prints keys
} 
for (var key in myObj){
    console.log(myObj[key])//prints values
}
