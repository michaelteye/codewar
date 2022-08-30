// In this challenge, you will be given an array of positive integers for example [1,2,3,4,5] and another positive integer such as 100 called total. For the array, you must either add the numbers (1 and 2 becomes 1+2), subtract the numbers (1 and 2 becomes 1-2), or combine them together (1 and 2 becomes 12) with the goal of creating an equation where the final solution is the total provided. An example would be:

// Given the array [1,2,3,4,5,6,7,8,9] and the total 100

// one equation would be 12+3-4+5+67+8+9 which equals 100
// another equation would be 1+2+34-5+67-8+9 which also equals 100
// The return value of this function should be the number of equations of the numbers in the array that match the total.

// ex. addsTo([1,2,3,4,5], 15) // returns 2 (because 1+2+3+4+5 = 15 and 1+23-4-5 = 15)

// ex. addsTo([3,4,5,6,7,8], 65) // returns 0

// ex. addsTo([1,2,3,4,5,6,7,8,9], 100) // return 11 because 12+3+4+5-6-7+89 = 100 and 10 others

// IMPORTANT NOTES:

// Do not change the order of the numbers.
// There is no limit on the length of the array.
// Do not use leading zeros so [1,2,3,0,2,3] should return 2: 123 - 0 - 23 and 123 + 0 - 23 but NOT 123 - 023.
// For an added challenge, try to complete this without using eval

addsTo=(a,t)=>{
    n=a.length
    for(c=0,i=3**--n;i--;){
      for(k=i,s='+'+a[j=0];j++<n;)
        s+=('+-'[k%3]||'')+a[j],k=k/3|0
      c+=!/[+-]0\d/.test(s)*eval(s)==t
    }
    return c
}
// alternative solution
function addsTo(arr, total) {
    let terms = [arr[0]];
    for(let i=1; i<arr.length; ++i) {
      terms.push('+');
      terms.push(arr[i]);
    }
    let counts = 0;
    do {
      var carry = true;
      
      let pos = 1;
      while(carry && pos < terms.length) {
        let op = terms[pos];
        carry = op === '';
        terms[pos] = op == '+' ? '-' : (op == '-' ? '' : '+');
        pos += 2;
      }
      
      let expr = terms.join('');
      if(!/\D0\d/.test(expr))
        counts += (eval(expr) == total);
      
    } while (!carry);
    
    return counts;
  }