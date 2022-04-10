// In this Kata, you will be given an array of unique elements, 
//and your task is to rearrange the values 
//so that the first max value is followed by the first minimum, 
//followed by second max value then second min value, etc.

function solve(arr){
  let myarr =  arr.slice()
  myarr.sort((a,b)=> b-a)
    for(let i =1; i< arr.length; i+=2){
      myarr.splice(i,0, myarr.pop())
      
    }
  return myarr
};