// write a function that return the missing numbers of a given arrays

function retunMissingArray(arr1, arr2){
    let newArr1 = arr1.sort()
    let newArr2 = arr2.sort()
    for(let i = 0; i <= newArr1.length; i++){
        if(newArr1[i] != newArr2[i]){
            return (newArr2[i])
        }
    }
}

console.log(retunMissingArray([1,3,5,7],[2,4,7,5]))

