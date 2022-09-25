function mergeArrays(a, b) {
    // your code here
    let myReturns = []
    let mycount = 0
    while(a[mycount] || b[mycount]){
      if(a[mycount]){
        myReturns.push(a[mycount])
      }
      if(b[mycount]){
        myReturns.push(b[mycount])
      }
      mycount++
    }
    return myReturns
  }

// alternative
function mergeArrays(a, b) {
    let j = [],
        longest = a.length > b.length ? a:b;
    for (var i=0; i<longest.length; i++){
      if (a[i]) j.push(a[i])
      if (b[i]) j.push(b[i])
    }
    return j
  }