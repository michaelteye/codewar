// Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

const combine = (...params) => params.reduce((a, b) => {
    for (const x in b) { a[x] = x in a ? a[x] + b[x] : b[x] };
    return a;
   }, {});

// Alternative method
function combine(...obj) {
    let objArr = [].concat(...obj)
    let finalObj = {}
    objArr.forEach(object => { 
      for(key in object){
        if(finalObj[key]) finalObj[key] = finalObj[key] + object[key] 
        else finalObj[key] = object[key] 
      }
    })
    return finalObj  
  }