// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-jpatricknola');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */

var maleCount = function(array) {
    let male = _.filter(array, function(e, i, a){
        return e.gender === 'male'
        });
     return male.length
};

var femaleCount = function(array){
    return _.reduce(array, function(fCount, person){
        if (person.gender === 'female'){
           fCount++;
        }
        return fCount;
    }, 0);
};


/*var oldestCustomer = function(array){
    let name = array[0].name;
    let age = array[0].age;
    _.each(array, function(e, i, a){
        if (e.age > age){
            name = e.name ;
            age = e.age;
        }
    });
    return name;
};*/

var oldestCustomer = function(array){
    let oldestName;
     _.reduce(array, function(oldestAge, person, i){
        if (person.age > oldestAge){
            oldestName = person.name;
            oldestAge = person.age;
            return oldestAge;
        }
        return oldestAge;
    }, 0);
    return oldestName;
};

var youngestCustomer = function(array){
    let name;
    _.reduce(array, function(youngestAge, person){
        if (person.age < youngestAge){
            name = person.name ;
            youngestAge = person.age;
        }
        return youngestAge;
    }, 1000);
    return name;
};

var averageBalance = function(array){
    return (_.reduce(array, function(totalBal, person){
        return totalBal += parseFloat(person.balance.slice(1).replace(",", ""));
    }, 0))/array.length;
};


/*
var averageBalance = function(array){
    let allBal = 0;
    _.each(array, function(e, i, a){
        let bal = e.balance.slice(1).replace(",", "");
        allBal += parseFloat(bal, 10);
    });
    return allBal/array.length;
}; */

/*var firstLetterCount = function(array, letter){
    let count = 0;
    _.each(array, function(e, i, a){
        if (e.name[0].toLowerCase() === letter.toLowerCase()){
            count ++;
        }
    });
    return count;
};*/
var firstLetterCount = function(array, letter){
    return _.reduce(array, function(count, person){
        if (person.name[0].toLowerCase() === letter.toLowerCase()){
            count++;
        }
        return count;
    }, 0);
};

var friendFirstLetterCount = function(array, customer, letter){
    let friends; 
    let count = 0;
    _.each(array, function(e, i, a) {
        if (e.name === customer){
            friends = e.friends;
        }
    });
    
   return _.reduce(friends, function(seed, friend){
        if (friend.name[0].toLowerCase() === letter.toLowerCase()){
            seed = seed +1;
        }
        return seed;
    }, 0);
};

var friendsCount = function(array, name){
    return _.reduce(array, function(friends, person){
        let result = _.reduce(person.friends, function(seed, e, i){
            if(e === name){
                seed === person.name;
            }
            return seed;
        }, "");
        if (result.length > 0){
            friends = friends.push(result);
        }
    }, []);
};




/*
var friendsCount = function(array, name){
    let fr = [];
    _.map(array, function(e, i, a){
        for (let x = 0; x < e.friends.length; x++){
            if(e.friends[x].name === name){
                fr.push(e.name);
            }
        }
    });
    return fr;
};*/

var topThreeTags = function (array){
  let bigArr = _.pluck(array, 'tags'); // compile all tags
  bigArr = bigArr.join().split(","); // turn into a single array
  // create counter object with each tag as a key having 0 for its value   
  let counter = {};  
   // create a key for each tag with a value corresponding to its frequency
  _.filter(bigArr, function(e, i, a){
    if (counter.hasOwnProperty(e) === false){
       counter[e] = 0;
    }
    return counter[e] ++ ;
  }); 
  // subtract 1 from all values, remove keys with value = zero, continue until only 3 keys left
  while (Object.keys(counter).length > 3){
    for (var key in counter){
      counter[key] -- ;
    if (counter[key] < 1){
      delete counter[key];
    }
    }
  }
  //return the 3 remaining keys in an Array
  return Object.keys(counter);
};


var genderCount = function(){
    let gen = {male: 0, female: 0, transgender: 0};
    _.map(customers, function(e, i, a){
        if (e.gender === 'male'){
            gen.male += 1;
        }
        else if (e.gender === 'female'){
            gen.female += 1;
        }
        else {
            gen.transgender += 1;
        }
    });
    return gen;
};



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;

