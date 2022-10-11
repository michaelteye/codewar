function strCount(obj){
    // initializing count
    let count = 0
    for(let i in obj){
        if(typeof obj[i] == 'string')count++
        if(typeof obj[i] == 'object') count += strCount(obj[i])
    }
    return count++
}