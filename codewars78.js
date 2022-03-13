// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
function invert(array) {
    if(array==null){
      return []
    }
     let mynum = 0
     let soup = []
     for(let i = 0; i< array.length; i++){
       mynum = -array[i]
       if(mynum === array[i]){
         mynum+=-(array[i])
       }
       soup.push(mynum)
     }
     return soup;
   }

// Alternate method
function invert(array) {
    var newArr = [];
    for(var i = 0; i < array.length; i++){
      newArr.push(-array[i]);
    }
     return newArr;
  }