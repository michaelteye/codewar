// #The method should add the values of the arrays to one new array.

// The arrays in the array will all have the same size and this size will always be greater than 0.
// The shifting value is always a value from 0 up to the size of the arrays.
// There are always arrays in the array, so you do not need to check for null or empty.





function addingShifted(arrayOfArrays, shift){
    let checkout = [];
    for(let i =0; i < arrayOfArrays.length; i++){
        for(let j=0; j < arrayOfArrays[i].length; j++){
            checkout[shift * i + j]=(checkout[shift * i + j] || 0) + arrayOfArrays[i][j]
        }
    }
    return checkout

}
console.log(addingShifted([[1,2,3,4,5,6],[7,7,7,7,7,-7]],0))