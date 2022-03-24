// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

function maps(x){
    return x.map(y=> y *2)
  }
  // alternative solution
const maps = arr => arr.map( x => x * 2 )
// alternate
function maps(x){
    //return x.map(el => el * 2);
    let arr = [];
    for(let i = 0; i < x.length; i++){
    arr.push(x[i] * 2);
    }
    return arr;
    }