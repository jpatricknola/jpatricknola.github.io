// Longest Word
function LongestWord(sen) {
 sen = sen.replace(/[^0-9a-z]/gi, "+");
 let arr = sen.split("+");
 let long = arr[0];
 for (let i = 1; i < arr.length; i++){
     if (arr[i].length > long.length){
         long = arr[i]
     }
 }
  return long; 
}
  
   
   
// First Factorial
function FirstFactorial(num) { 
    let i = num-1
    while (i > 0){
        num = num * i
        i = i-1
    }
  // code goes here  
  return num; 
}
  
// First Reverse
function FirstReverse(str) { 
 let revStr = ""
 for (let i = str.length-1; i > -1; i--){
     revStr += str[i];
 }
 str = revStr;
  // code goes here  
  return str; 
}
   
 // Letter Changes

function LetterChanges(str) { 
    let unicodeStr = "";
    for (let i = 0; i < str.length; i++){
        let uni = str.charCodeAt(i);
        if (uni > 96 && uni < 123){
        uni = uni + 1;
        }
        uni = String.fromCharCode(uni);
        if(uni === 'a' || uni === 'e' || uni === "i" || uni === 'o' || uni === "u"){
            uni = uni.toUpperCase();
        }
        unicodeStr += uni;
    }
  // code goes here  
  return unicodeStr; 
}
   

// Simple Adding

function SimpleAdding(num) { 
    let count = 1;
    let answer = 0;
    while (count <= num){
        answer = answer + count;
        count ++;
    }
    num = answer;
  // code goes here  
  return num; 
}

//Letter Capitalize
function LetterCapitalize(str) { 
 let strArr = str.split(" ");
 let answer = [];
 for (let i = 0; i < strArr.length; i++){
     answer.push(strArr[i].slice(0, 1).toUpperCase() + strArr[i].slice(1));
 }
 str = answer.join(" ");
  // code goes here  
  return str; 
         
}
  // Simple Symbols
   
 function SimpleSymbols(str) { 
  let test = str
    for (let i = 0; i < test.length; i++){
        if (test.charCodeAt(i) >= 65 && test.charCodeAt(i) <= 122){
            if (test[i-1] !== "+" || test[i+1] !== "+"){
                return false;
            }
        }
    }
  return true;
} 
 
 // Check Nums
 
 function CheckNums(num1,num2) { 
    if (num1 > num2){
        return 'false';
    }
    else if (num2 > num1){
        return "true"
    }
    else {
        return "-1"
    }
  // code goes here  
         
}

// Time Convert

function TimeConvert(num) { 
    let hour = Math.floor(num/60);
    let minute = num%60;
    if (num < 0){
        hour = hour *-1;
    }
    num = hour + ":" + minute;
    
  // code goes here  
  return num; 
         
}

// Alphabet Soup

function AlphabetSoup(str) { 
    let arr = Array.from(str);
    arr = arr.sort().toString().split(",").join("");
  return arr; 
}