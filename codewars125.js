function solution(value){
    let size = 5
    value = value.toString();
    while(value.length < size) value = "0" + value
    return `Value is ${value}`
}

// Alternative solution
function solution(value){
    return `Value is ${value.toString().padStart(5,'0')}`
}