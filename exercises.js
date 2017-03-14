//Do not change any of the function names

function multiplyByTen(num) {
  //return num after multiplying it by ten
  return num * 10;
}

function subtractFive(num) {
  //return num after subtracting five
  return num - 5;
}

function areSameLength(str1, str2) {
  //return true if the two strings have the same length
  if (str1.length === str2.length) {
    return true;
  }
//otherwise return false
  else {
    return false;
  }
}

function areEqual(x, y) {
  //return true if x and y are the same
  if (x === y) {
    return true;
  }
  //otherwise return false
  else {
    return false;
  }
}

function lessThanNinety(num) {
  //return true if num is less than ninety
  if (num < 90) {
    return true;
  }
  //otherwise return false
  else {
    return false;
  }
}

function greaterThanFifty(num) {
  //return true if num is greater than fifty
  if (num > 50) {
    return true;
  }
  //otherwise return false
  else {
    return false;
  }
}

function add(x, y) {
  //add x and y together and return the value
  return x + y;
}

function subtract(x, y) {
  //subtract y from x and return the value
  return x - y;
}

function divide(x, y) {
  //divide x by y and return the value
  return x / y;
}

function multiply(x, y) {
  //multiply x by y and return the value
  return x * y;
}

function getRemainder(x, y) {
  //return the remainder from dividing x by y
  return x % y;
}

function isEven(num) {
  //return true if num is even
  if (num % 2 === 0) {
    return true;
  }
  //otherwise return false
  else {
    return false;
  }
}

function isOdd(num) {
  //return true if num is false
  if (num % 2 !== 0) {
    return true;
  }
  //otherwise return false
  else {
    return false;
  }
}

function square(num) {
  //square num and return the new value
  return num * num;
}

function cube(num) {
  //cube num and return the new value
  return num * num * num;
}

function raiseToPower(num, exponent) {
  //raise num to whatever power is passed in as exponent
  var total = 1;
  while (exponent > 0) {
   total *= num;
   exponent--;
 }
 return total;
}

function roundNumber(num) {
  //round num and return it
  return Math.round(num);
}

function roundUp(num) {
  //round num up and return it
  return Math.ceil(num);
}

function addExclamationPoint(str) {
  //add an exclamation point to the end of str and return the new string
  //'hello world' -> 'hello world!'
  return str + '!';
}

function combineNames(firstName, lastName) {
  //return firstName and lastName combined as one string and separated by a space.
  //'Lambda', 'School' -> 'Lambda School'
  return firstName + ' ' + lastName;
}

function getGreeting(name) {
  //Take the name string and concatenate other strings onto it so it takes the following form:
  //'Sam' -> 'Hello Sam!'
  return 'Hello ' + name + '!';
}

//If you can't remember these area formulas then head over to Google or look at the test code.

function getRectangleArea(length, width) {
  //return the area of the rectangle by using length and width
  return length * width;
}

function getTriangleArea(base, height) {
  //return the area of the triangle by using base and height
  return (height * base) / 2;
}

function getCircleArea(radius) {
  //return the rounded area of the circle given the radius
  return Math.round(Math.PI * (radius * radius));
}

function getRectangularPrismVolume(length, width, height) {
  //return the volume of the 3D rectangular prism given the length, width, and height
  return length * width * height;
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
