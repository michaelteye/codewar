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
// Alternative solution
function combine() {
    let result = {};
    for (let obj of arguments) {
        for (let property in obj) {
            if (property in result) {
                result[property] += obj[property];
            } else {
                result[property] = obj[property];
            }
        }
    }
    return result;
}
//New Method
function combine(){
    var final = {}; 
    for(var _arg in arguments){ 
      for(var _property in arguments[_arg]){
        final[_property]===undefined?
          final[_property]=arguments[_arg][_property]:
          final[_property]+=arguments[_arg][_property];
      }
     }
     return final;
}