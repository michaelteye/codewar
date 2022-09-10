function checkString(returntwo){
    let emptyarr = []
    for(let i = 0; i < returntwo.length; i+=2){
        if(i < returntwo.length-1){
            emptyarr.push(returntwo[i] + returntwo[i+1])
        }
        else{
            emptyarr.push(returntwo[i] + "_")
        }
    }
    return emptyarr
}
console.log(checkString("abc"))