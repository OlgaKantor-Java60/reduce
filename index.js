function myReduce(array, callback, initialValue) {
  //first parametr is an array for reducing
  //returns one value after reducing
  //see mdn web docs
  let index = initialValue ? 1 : 0;
  let acc = initialValue ? initialValue : array[0]; //TODO doesn't work with initialValue = 0; or undefined
  for (; index < array.length; index++) {
    if (array[index] != undefined) {
      acc = callback(acc, array[index], index, array);
    }
  }
  return acc;
}

function minMaxValue(array) {
  // TODO strings
  //arr is an array containing either strings or numbers
  //returns array with 2 elements: first - min value, second - max value
  //requirement: to use myReduce method described above
 const res = myReduce(array, (acc, curr) => {
      acc[0] = acc[0]>curr ? acc[0] = curr : acc[0];
      acc[1] = acc[1]<curr ? acc[1] = curr : acc[1];
      return acc;
  }, [array[0], array[0]])
return res;
}

let arr = [1, 0, 2000, -10, 155];
console.log(minMaxValue(arr));
 

