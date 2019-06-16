var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];



function addElementToBeginningOfArray(array, element) {
  var newarray = [element, ...array];
  return newarray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

var myArray = [2, 4, 5]
destructivelyAddElementToBeginningOfArray(myArray, "foo")