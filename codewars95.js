function removeNthElement(arr,n){
    var arrCopy  = arr.slice();
    arrCopy.splice(n,1);
    return arrCopy;
}
//alternative solution.
function removeNthElement(myarr, n) {
    const arrCopy = [...myarr];
    arrCopy.splice(n, 1);
    return arrCopy;
}

// alternative
function takeNthElement(a, n) {
    return ((a=a.slice()).splice(n,1),a)
}

//alternative
const checkNthElement = (a,n)=> ((a=[...a]).splice(n, 1),a)

// alternative using the filter method
function moveNthElement(arr, nth) {
    // Fix it
    return arr.filter((_,i)=>i!=nth);
}