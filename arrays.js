var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var newarray = [element, ...array];
  return newarray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray (array, element) {
  var newarray= [...array, element]
  return newarray
}

function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element);
  return array
}

function accessElementInArray (array, element) {
  return array[element];
}

function destructivelyRemoveElementFromBeginningofArray(array, element) {
  array.shift()
}