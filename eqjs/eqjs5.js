// FLATTENING

var flatten = (array) =>{
  return array.reduce(function(newArr, e){
    return newArr.concat(e);
  }, []);
};

// YOUR OWN LOOP  It takes a value, a test function, an update function, and a body function. 

function ownLoop (value, test, update, body){
  if (test(value) === false){
    return false;
  }
  body(value);
  value = update(value);
  return ownLoop(value, test, update, body);
}

// EVERYTHING

function every1 (array, test){
  for (let i = 0; i < array.length; i++){
    if (test(array[i]) === false){
      return false;
    }
  }
  return true;
}

function every2(array, test) {
  if (array.filter(test).length === array.length){
  return array.some(test);
  }
return false;
}

// DOMINANT WRITING DIRECTION

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => code >= from &&
                                           code < to)) {
      return script;
    }
  }
  return null;
}

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}



function dominantDirection(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
    }).filter(({name}) => name != "none");
    if (scripts.length === 0) {
        return 'there is no dominant direction';
    }
    else if (scripts.length === 1){
        return scripts[0].name;
    }
    else {
        return scripts.reduce((acc, cur) => acc.count >= cur.count ? acc.name : cur.name);
    }
}