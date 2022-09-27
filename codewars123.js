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