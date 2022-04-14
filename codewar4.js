//You are given an array of values.

//Sum every number value in the array, and any nested arrays (to any depth).

//Ignore all other types of values.

const arraySum = (arr) => arr.reduce((p, c) => Array.isArray(c) ? arraySum(c) + p : isNaN(c) ? p : c + p, 0);
