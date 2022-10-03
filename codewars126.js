function toNumberArray(stringarray){
    let results = [] 
    for(let i =0; i<= stringarray.length-1; i++){
      let toArr = stringarray[i]
      let num = Number(toArr)
      results.push(num)
    }
    return results
}

// Alternative solution
const toNumberArray = (stringarray)=>{
    let results = []
    stringarray.forEach((strarr)=>{
        results.push(Number(strarr))
    })
    return results;
}
console.log(toNumberArray(["1","2","3"]))