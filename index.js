function myReduce(array, callback, initialValue) {
  let index = initialValue == undefined ? 1 : 0;
  let acc = initialValue ?? array[0]; // now '0' = 'true'
  for (; index < array.length; index++) {
    acc = callback(acc, array[index], index, array);
  }
  return acc;
}

function minMaxValue(array) {
  const res = myReduce(array, (acc, curr) => {
    acc[0] = acc[0] > curr ? curr : acc[0];
    acc[1] = acc[1] < curr ? curr : acc[1];
    return [acc[0],acc[1]];
  }, [array[0], array[0]]);
  return res;
}

let arr1 = [155, 2000, 0, -10, 1];
let arr2 = ["kukareku", "TelRan", "str", "60", "JavaScript"];
console.log(`Call of function minMaxValue for array of numbers [${arr1}] => result: ${minMaxValue(arr1)}`);
console.log(`Call of function minMaxValue for array of strings [${arr2}] => result: ${minMaxValue(arr2)}`);
