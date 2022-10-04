function toNumberArray(stringarray){
    let results = [] 
    for(let i =0; i<= stringarray.length-1; i++){
      let toArr = stringarray[i]
      let num = Number(toArr)
      results.push(num)
    }
    return results
}