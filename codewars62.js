// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

var summation = function (num) {
    // Code here
    let lls = 0;
    for(let i=1; i<=num; i++){
       lls+=i
    }
    return lls
  }