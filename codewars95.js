function removeNthElement(arr,n){
    var arrCopy  = arr.slice();
    arrCopy.splice(n,1);
    return arrCopy;
}
// alternative solution
const removeNthElement = (arr, n = 0) =>[...arr.slice(0, n), ...arr.slice(n + 1)]