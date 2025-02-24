function myReduce(array, callback, initialValue) {
  //first parametr is an array for reducing
  //returns one value after reducing
  //see mdn web docs
  let index = initialValue ? 1 : 0;
  let acc = initialValue ? initialValue : array[0];
  for (; index < array.length; index++) {
    if (array[index] != "" && array[index] != undefined) {
      acc = callback(acc, array[index], index, array);
    }
  }
  return acc;
}

function minMaxValue(arr) {
  //arr is an array containing either strings or numbers
  //returns array with 2 elements: first - min value, second - max value
  //requirement: to use myReduce method described above
  myReduce(arr, () => {

  })
}
