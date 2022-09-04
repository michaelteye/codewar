// checking for some old sum of array

function sum (array) {
  let res = 0;
  for (let i = 0; i < array.length; i++) {
    res = res + array[i];
  }
  return res;
  
}
console.log(sum(array));

// alternative solution
function mergeArrays(arr1, arr2) {
    return arr1
      .filter((item) => !arr2.includes(item))
      .concat(arr2)
      .sort((a, b) => a - b)
  }