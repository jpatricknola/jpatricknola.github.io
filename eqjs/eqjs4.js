//RANGE AND SUM
function range (start, end, step){
    let arr = []
    let x = start;   
    if (x < end){
    while (x < end-1){
        if(step){x = x+step}
        else{x++}
        arr.push(x)
    }
    }
    else {
        while (x > end + 1){
        if(step){x = x + step}
        else{x - 1}
        arr.push(x)
    }
    }
    return arr; 
}

function sum (array){
    let answer = 0
    for (let i = 0; i < array.length; i++){
        answer += array[i]
    }
    return answer
}


/*Arrays have a reverse method that changes the array by inverting the order in which its elements appear
For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, 
takes an array as argument and produces a new array that has the same elements in the inverse order. 
The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument 
by reversing its elements. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, 
which variant do you expect to be useful in more situations? Which one runs faster?
*/
function reverseArray(array){
    let revArr = [];
    for (let i = array.length-1; i >=0; i--){
        revArr.push(array[i]);
    }
    return revArr;
}

function reverseArrayInPlace(array){
    let midpoint = Math.floor(array.length/2)
    for (let i = midpoint; i >= 0; i--){
        let val = array[i]
        array.splice(i,1)
        array.push(val)
    }
if (array.length % 2 === 1){
  var frontArr = array.splice(0, midpoint);}
  else {
    var frontArr = array.splice(0, midpoint-1);
  }
   for (let i = 0; i < frontArr.length; i++){
     let val = frontArr[i]
       array.unshift(val)
   }
    return array
}

//ARRAY TO LIST

function arrayToList(array){
  let list = null;
  for (let i = array.length-1; i > -1; i--){ 
    list = {value: array[i], rest: list}
           }
return list;
}


//LIST TO ARRAY
function listToArray(object){
  let arr = []
  if (object.rest === null){
    return object.value;
  }
  arr.push(object.value)
  arr = arr.concat(listToArray(object.rest))
  return arr
}
//PREPEND
function prepend(element, list){
    if (list === null){
      list = {rest: null}
    }
    list.rest = list;
    list.value = element;
    return list;
}
// Nth

function nth(list, num){
  let arr = listToArray(list);
  if (typeof(arr === 'number') && num === 0){
    return arr;
  }
  return arr[num];
}

// DEEP COMPARISON
function deepComparison(thing1, thing2){
    if (thing1 === thing2){
        return true;
    }
    if (thing1 === null && thing2 !== null || thing1 !== null && thing2 === null){
        return false;
    }
    if (typeof thing1 === 'object' && typeof thing2 === 'object'){
        let keys1 = Object.keys(thing1).sort();
        let keys2 = Object.keys(thing2).sort();
        if (keys1.length === keys2.length){
            for (let i = 0; i < keys1.length; i++){
               if (thing1[keys1[i]] !== thing2[keys2[i]]){
                   return false;
               }
            }
            return true;
        }
        
    }
    
    return false;
}


