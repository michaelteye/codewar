function solution(value){
    let size = 5
    value = value.toString();
    while(value.length < size) value = "0" + value
    return `Value is ${value}`
}