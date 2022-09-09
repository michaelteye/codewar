// consecutive string
function longestConsec(strarr, k) {
    var longest = "";
    for(var i=0;k>0 && i<=strarr.length-k;i++){
      var tempArray = strarr.slice(i,i+k);
      var tempStr = tempArray.join("");
      if(tempStr.length > longest.length){
        longest = tempStr;
      }
    }
    return longest;
}

//Alternative Solution

// function to access two characters in a string

function mysolution(strin){
  let ouput = []

  for(let i = 0; i < strin.length; i+=2){
      if(i < strin.length-1){
          ouput.push(strin[i] + strin[i + 1])
      }
      else{
          ouput.push(strin[i] + '_')
      }
  }
  return ouput
}
console.log(mysolution("Star with the boy"))