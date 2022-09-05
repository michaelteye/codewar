function solution(str){
    var i = 0;
    var result = new Array();
    if (str.length % 2 !== 0) {
      str = str + '_';
    }
    while (i < str.length) {
        result.push(str[i] + str[i+1]);
        i += 2;
      }
    return result;
  }

// Alternative
function solution(str){
  let result = []

  for (let i = 0; i < str.length; i += 2) {
    if (i < str.length - 1) {
      result.push(str[i] + str[i + 1])
    } else {
     result.push(str[i] + '_') 
    }
  }
  
  return result
}