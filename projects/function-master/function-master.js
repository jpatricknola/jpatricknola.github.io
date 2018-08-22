//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    let values= [];
    for (var keys in object){
        values.push(object[keys])
    }
    return values;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    var keyString = ""
    for (var keys in object){
        keyString += keys + " "
    }
    return keyString.slice(0, keyString.length-1)
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
     let values= "";
    for (var keys in object){
        if (typeof object[keys] === 'string'){
        values += (object[keys]) + " "
    }
 
}   return values.slice(0, values.length-1);
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)){
        return "array"
    }
    else if (typeof collection === 'object'){
        return 'object'
    }
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
  let str = string.toLowerCase();
   str = str.split(" ");
   for (var i = 0; i < str.length; i++){       
   str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
   }
return str.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    var name = object.name.charAt(0).toUpperCase()+object.name.slice(1);
    return "Welcome " + name + '!'

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    var name = object.name.charAt(0).toUpperCase()+object.name.slice(1);
    var species = object.species.charAt(0).toUpperCase()+object.species.slice(1);
    return name + " is a " + species;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if (object.hasOwnProperty('noises') && object.noises.length > 0) {
        return object.noises.join(' ')
    }
    else {
        return "there are no noises"
    }

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    let arr = string.split(" ")
    for (var i= 0; i < arr.length; i++){
        if (arr[i] === word){
            return true
        }
    } return false

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name);
    return object

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    if (object.hasOwnProperty('friends') && object.friends.length > 0){
        for (var i= 0; i < object.friends.length; i++){
         if (object.friends[i].toLowerCase() === name.toLowerCase()){
            return true
         }
        }
    } return false
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    let frs = []
    let all = []
    for (var i = 0; i < array.length; i++){
        if(array[i].name === name){
            frs = array[i].friends
        }
        else {
            all.push(array[i].name)
        }
    }
    for (var x = 0; x < frs.length; x++){
        for (var y = 0; y < all.length; y++){
            if (all[y] === frs[x]){
                all.splice(y, 1)
            }
        }
    }
    return all;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key] = value;
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    for (var i = 0; i < array.length; i++){
        if (object.hasOwnProperty(array[i])){
      delete object[array[i]];
        }
   }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    for (var i = 0; i < array.length; i++){
        for (var j = 0 ; j < array.length; j++){
        if (array[i] === array[j] && i !== j){
            array.splice(j, 1)
        }
        }  
    }
    for (var i = 0; i < array.length; i++){
        for (var j = 0 ; j < array.length; j++){
        if (array[i] === array[j] && i !== j){
            array.splice(j, 1)
        }
        }  
    }
    
    return array;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}