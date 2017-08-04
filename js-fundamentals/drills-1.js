// write a function called addOne() that takes a number as input and returns a new number that's one more than the input.
function addOne(x) {
   return x + 1;
}
console.log(addOne(3))
// write a function called doubleNum() that takes a number as input and returns the double of the number.
function doubleNum(x) {
   return x * 2;
}
console.log(doubleNum(5))

// write a function called isNegative(). it should take a single, numerical input. it should output true if the number is negative, and false if the number is positive.
function isNegative(x) {
  if (x < 0) {
    return(true);
  }
  else {
    return(false);
  }
}
console.log(isNegative(10))
console.log(isNegative(0))
console.log(isNegative(-10))

// modify isNegative() so that it only accepts numerical input. it should return the string, "input must be a number," if bad input has been submitted.
function isNegative(x) {
  if (isNaN(x)) {
    return("input must be a number");
  }
  else {
    if (x < 0) {
    return(true);
   }
    else {
    return(false);
   }
  }
}
console.log(isNegative("a"))

// write a function called isEven() that tells whether a number is even or not.
function isEven(x) {
  if (x % 2 === 0) {
    return(true);
  }
  else {
    return(false);
  }
}
console.log(isEven(6))
console.log(isEven(3))

// write a function called isBig() that tells whether a number is greater than 10,000 or not.
function isBig(x) {
  if (x > 10000) {
    return(true);
  }
  else {
    return(false);
  }
}
console.log(isBig(10100))
console.log(isBig(100))

// write a function called addPeriod(). it should take as input a string, and return a copy of that string with a period on the end.
function addPeriod(str) {
return(str + ".")
}
console.log(addPeriod("thank you"))

// write a function called sayItTwice(). it should take as input a string ('bubble') and return that string repeated twice, with a space between ('bubble bubble').
function sayItTwice(str) {
  return(str.repeat(2))
}
console.log(sayItTwice("Hi Collin "))

// write a function called firstShallBeLast(). it should add a copy of the first element of a string to the end of the string, then return the result.
function firstShallBeLast(str) {
  var addition1 = str.slice(0,1)
  return (str + addition1)
}
console.log(firstShallBeLast("Hi everyone"))

// write a function called secondToLast(). it should return the second-to-last element of a string or array.
function secondToLast(str) {
  var secondToLast = str.length -2
  return str[secondToLast]
}
console.log(secondToLast("how long is this sentence"))


// write a function called hasX(). it should take as input a string, and it should return true if the string contains the character 'x', and false if it does not.
function hasX(str) {
  return str.includes("x")
}
console.log(hasX("xylophone"))

// write a function called hasEl(). it should take two inputs: a string and a character. it should return true if the string contains the character, and false if it does not. if you get it right, try the function on an array and a potential array element instead. does it still work?
function hasEl(str, char) {
  return str.includes(char)
}
console.log(hasEl("xylophone","y"))
console.log(hasEl("xylophone","b"))

// write a function called incrementEach(). it should take as input an array of numbers and return a new array that contains each number from the input array, increased by one.
function incrementEach(arrayNumbers) {
  return arrayNumbers.map(function(eachNum){
    return eachNum + 1
  })
}
console.log(incrementEach([1,2,3]))

// write a function called doubleAll(). it should take as input an array of numbers and return a new array that contains each number from the input array, doubled.
function doubleAll(arrayNumbers) {
  return arrayNumbers.map(function(eachNum){
    return eachNum * 2
  })
}
console.log(doubleAll([1,2,3]))

// write a function called getFirstLetterCaps(). it should take as input a string, and it should return a capitalized version of the string's first character.
function getFirstLetterCaps(x) {
  return(x[0].toUpperCase() +
  x.slice(1).toLowerCase());
}
console.log(getFirstLetterCaps("hi there !"))

// write a function called capitalizeWord(). it should take as input a string, and return a copy of that string with the first character capitalized.
function capitalizeWord(x) {
  return(x[0].toUpperCase() +
  x.slice(1).toLowerCase());
}
console.log(capitalizeWord("how are you ?"))

// write a function called capitalizeAllWords(). it should take as input an array of strings, and it should return a new array where all the words have been capitalized. HINT: use your capitalizeWord() function from above.
function capitalizeAllWords(arrayStrings) {
  return arrayStrings.map(capitalizeWord)
}
console.log(capitalizeAllWords(["why","are","you","screaming"]))

// write a function called arrayToString(). it should take as input an array, and it should concatenate all of the array's elements into one big string, and then return that string.
function arrayToString(arrayInfo) {
  return arrayInfo.join(" ")
}
console.log(arrayToString(["why","are","you","screaming"]))

// write a function called shortiesOnly(). taking as input an array of strings, it should return a new array containing only those strings with fewer than four characters.
function shortiesOnly(arrayOfStrings) {
return arrayOfStrings.filter(function(arrayInfo){
  return arrayInfo.length < 4;
})
}
console.log(shortiesOnly(["why","arent","you","screaming"]))

// write a function called reverseIt(). it should take as input a string or array (remember that we can often treat them the same way), and it should return a reversed version of that input.
function reverseIt(x) {
  if (typeof x === 'string') {
    return x.split(" ").reverse().join(" ");
  }
  else {
    return x.reverse();
  }
}
console.log(reverseIt("why is this backward ?"))
console.log(reverseIt(["why","arent","you","screaming"]))

// write a function called getValue(). it should take two inputs: an object and a key. it should return the corresponding value for that key within the object. keep in mind that this should be a one-line function. no more than two.
function getValue(object, key) {
  return object[key]
}
console.log(getValue({
  title: 'wizard of oz'
},'title'));

// write a function called getAllValues(). it should take as input an object, and it should return the values of all the keys in the object.
function getAllValues(object) {
  var values = []
  // console.log(Object.keys(object)) //this shows the keys
  Object.keys(object).forEach(function(keyName){  //forEach can be done now because it became an array
    values.push(object[keyName]) //push is an array behavior
  })
  return values
}
console.log(getAllValues({
  name: 'james',
  age: 42
}))

// write a function called addProp(). It should take three inputs: an object, a property name, and a value. It should return the original object, plus a new key-value pair corresponding to the input.
function addProp(obj, propertyName, value, isUpper) {
  // if(isUpper) {
  //   value=value.toUpperCase()
  // }
  obj[propertyName]=value
  return obj
}
console.log(addProp({name: 'james'}, 'lastname', 'hildreth', true))


// write a new version of addProp() that only takes two inputs: an object, and a second object containing a single key-value pair. this key-value pair should take the place of the second and third inputs in the above problem. e.g.:

	// var usrObj = {name: 'linus odoyle', age:10, email:'odoylerules@yahoo.com'}
  //
	// var newObj = addProp(usrObj,{hometown:'new orleans'})
	// newObj should look like this:
	// {name: 'linus odoyle', age:10, email:'odoylerules@yahoo.com',hometown:'new orleans'}
	// if i run:
	// 	var newObj = addProp(newObj,{hobby:'bullying'})
	// 	then newObj should contain even more data:
	// 	{name: 'linus odoyle', age:10, email:'odoylerules@yahoo.com', hometown:'new orleans', hobby:'bullying'}
function addProp2(object, keyValuePair) {
  return Object.assign(object, keyValuePair)
}
  var usrObj = {name: 'james', age: 42, email: 'james@gmail.com'}
  var newObj = addProp(usrObj, {hometown: 'new orleans'})
  console.log(newObj)

// write a function called getKeys(). it should take as input an object, and it should return the names of all the keys (properties) of the object.
function getKeys(obj1) {
  return Object.keys(obj1)
}
console.log(getKeys({
  name: 'james',
  age: 42,
  city: 'zionsville',
  state: 'indiana'
}))

// write a function called addPropAll(). it should take three inputs: an array of objects, a property name, and a value. it should return a new array of objects, where each object has been supplemented with the key-value pair from the input.
function addPropAll(objects, name, value) {
    return objects.map(function(object) {
        object[name] = value
        return object
    })
}

var newList = addPropAll([
    {title: 'Forbes Best Cities'},
    {title: 'Best Places To Live'},
    {title: 'ABC Nightly News Top Cities'}
], 'city', 'Indianapolis')

console.log(newList)

// modify addPropAll() in the same way that you modified addProp above. it should take two inptus, an array of objects and a single object containing a single key-value pair. it should return a new array of objects, where each object has been supplemented with the key-value pair from the input.
 function addPropAllObj(objects, keyValuePair) {
   return objects.map(function(object) {
     Object.assign(object, keyValuePair)
     return object
 })
}
 var newList = addPropAllObj([
     {title: 'Forbes Best Cities'},
     {title: 'Best Places To Live'},
     {title: 'ABC Nightly News Top Cities'}
 ], {'Megacity': 'Indianapolis'})
 console.log(newList)

// write a function called logValues() that takes two inputs: an array of objects, and a property name. for each object in the array, it should log the value stored under the given property name within that object.
function logValues(arrayOfObjects, propertyName) {
  arrayOfObjects.forEach(function(obj) {
    console.log(obj[propertyName])
  })
}
var newList = logValues([
    {title: 'Forbes Best Cities'},
    {title: 'Best Places To Live'},
    {title: 'ABC Nightly News Top Cities'}
], 'title')
console.log(newList)

// write a function called getSpecificValues() that takes two inputs: an array of objects, and a property name. it should return an array containing the value stored under that property name for each object. for example, getSpecificValues(booksArray,'author') should return an array containing the author of every book object in the array.
function getSpecificValues(arrayOfObjects, propertyName) {
return arrayOfObjects.map(function(object) {
  return object[propertyName]
})
}
var newList = getSpecificValues([
    {title: 'Forbes Best Cities'},
    {title: 'Best Places To Live'},
    {title: 'ABC Nightly News Top Cities'}
], 'title')
console.log(newList)
