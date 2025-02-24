function myReduce(array, callback, initialValue) {
  //first parametr is an array for reducing
  //returns one value after reducing
  //see mdn web
  let index = initialValue == undefined ? 1 : 0;
  let acc = initialValue == undefined ? array[0] : initialValue; 
  for (; index < array.length; index++) {
    if (array[index] != undefined) {
      acc = callback(acc, array[index], index, array);
    }
  }
  return acc;
}

function minMaxValue(array) {
  //arr is an array containing either strings or numbers
  //returns array with 2 elements: first - min value, second - max value
  //requirement: to use myReduce method described above
  const res = myReduce(array, (acc, curr) => {
    acc[0] = acc[0] > curr ? (acc[0] = curr) : acc[0];
    acc[1] = acc[1] < curr ? (acc[1] = curr) : acc[1];
    return acc;
  }, [array[0], array[0]]);
  return res;
}

let arr1 = [155, 2000, 0, -10, 1];
let arr2 = ["kukareku", "TelRan", "str", "60", "JavaScript"];
console.log(`Call of function minMaxValue for array of numbers [${arr1}] => result: ${minMaxValue(arr1)}`);
console.log(`Call of function minMaxValue for array of strings [${arr2}] => result: ${minMaxValue(arr2)}`);
