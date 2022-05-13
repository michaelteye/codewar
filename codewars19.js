// Coding in function whatNumberIsIt. function accept 1 parameter:n. it's a number.

// To judge the number n. If n is one of the above five constants, return one of these string:

function whatNumberIsIt(mynumber){
    let maxnum = Number.MAX_VALUE
    let minnum = Number.MIN_VALUE
    let noValue = Number.NaN
    let allNegative = Number.NEGATIVE_INFINITY
    let allPositive = Number.POSITIVE_INFINITY
    if(maxnum===mynumber){
        return `Input number is Number.MAX_VALUE`

    }
    if(minnum===mynumber){
        return `Input number is Number.MIN_VALUE`
    }
    if(!mynumber){
        return `Input number is Number.NaN`
    }
    if(allNegative===mynumber){
        return`Input number is Number.NEGATIVE_INFINITY`
    }
    if(allPositive===mynumber){
        return `Input number is Number.POSITIVE_INFINITY`
    }
    else{
      return `Input number is ${mynumber}`
    }
//     return mynumber

}