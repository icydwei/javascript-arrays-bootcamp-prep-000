function addElementToBeginningOfArray(array, element) {
  var newarray = ["element", ...array]
  return newarray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array = array.unshift("element")
  return array
}