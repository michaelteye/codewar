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