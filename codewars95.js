function removeNthElement(arr,n){
    var arrCopy  = arr.slice();
    arrCopy.splice(n,1);
    return arrCopy;
}
//alternative solution.
function removeNthElement(arr, n) {
    const arrCopy = [...arr];
    arrCopy.splice(n, 1);
    return arrCopy;
}