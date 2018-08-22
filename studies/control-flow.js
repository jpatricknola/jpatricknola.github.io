//1. If: condition is true, execute code block
var myNumber = 7;
if (myNumber === 7){
    console.log('Its my number!')
} //prints "It's my number!"

//2. Else-if: comes after an if statment, if previous conditions were not true
//and the else-if condition is true, execute code block
var newNum = 6;
if (newNum > 7){
    console.log('too many!')
}
else if (newNum < 7){
    console.log('we can dig it!')
}// prints "we can dig it!"

//3 Else: if none of the previous conditions were true, execute this code block
var newestNum = 12;
if (newestNum < 12){
    console.log('less than twelve')
}
else if (newestNum > 12){
    console.log('more than twelve')
}
else {
    console.log('its twelve!')
}
//4. Switch: if value matches a case, do whatever is associated with that case
var switchVar = 'blue';
switch (switchVar){
    case 'red':
    console.log("Color is red");
    break;
    case 'purple':
    console.log('Color is purple');
    break;
    case 'blue':
    console.log("Color is blue");
    break
} // prints 'Color is blue'