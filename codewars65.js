function squareSum(numbers)
{ 
  var totalSum = 0;
  for (i=0;i<numbers.length;i++)
  {
    totalSum += Math.pow(numbers[i], 2);
  }
  return totalSum;
}
//Alternate
function squareSum(numbers) {
    return numbers.reduce((s,a)=>s+a*a,0);
  }