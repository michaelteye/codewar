// The first mission: let all elements in the array keep two decimal places(No need to convert number n).

// The second mission: Traversal arr, count the number of the element which smaller than n and return it.
function howManySmaller(arr,n){
    let tryy = 0
    for(let i= 0; i< arr.length; i++){
      if(arr[i].toFixed(2) < n){
        tryy++
      }
    }
    return tryy
    
  }
  