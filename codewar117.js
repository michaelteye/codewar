// checking for some old sum of array

function sum (array) {
  let res = 0;
  for (let i = 0; i < array.length; i++) {
    res = res + array[i];
  }
  return res;
  
}
console.log(sum(array));