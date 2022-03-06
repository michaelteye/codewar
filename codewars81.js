function fakeBin(x){
    let replacement = ""
   for(let i = 0; i< x.length; i++){
     if(x[i]<=4){
       replacement +="0"
     }
     else if(x[i]>=5){
       replacement +="1"
     }
     
   }
    return replacement
  
  }

// Alternative solutions
function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}
// Alternative solution
function fakeBin(str){
    var newStr = "";
    for(var i=0;i<str.length;i++){
      if(Number(str[i])>=5){
        newStr += "1"
      }
      else{
        newStr += "0";
      }
    }
    return newStr;
  }