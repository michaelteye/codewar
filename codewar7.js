//In this kata the function returns an array/list of numbers without its last element. 
//The function is already written for you and the basic tests pass, but random tests fail. 
//Your task is to figure out why and fix it.

//Good luck!

//Hint: watch out for side effects.





function withoutLast(arr) {
    // declaring a variable called enters that takes an empty list
    let enters = []

    // creating a for loop to iterate through the arrays

    for(let i = 0; i<arr.length; i++){

      //adding each element to the empty array
      enters.push(arr[i])

      
    }
    // arrays.prototype.pop() to remove the last index of the array

    enters.pop()

     // returning the new array excluding the last index
    return enters;
  }