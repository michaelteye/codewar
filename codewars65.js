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

  //Using the reduce method
function squareSum(numbers){
var res=0;

res= numbers.reduce(((a,b)=> a + (b*b)),0);

return res;
}
// Using the forEach
function squareSum(numbers){
    var sum = 0
    const numCopy = [...numbers]
    numCopy.forEach((element) => {
     sum += element ** 2;
    })
    
    return sum
  }