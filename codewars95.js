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

// alternative
function removeNthElement(a, n) {
    return ((a=a.slice()).splice(n,1),a)
}

//alternative
const removeNthElement = (a,n)=> ((a=[...a]).splice(n, 1),a)