function invert(array) {
    if(array==null){
      return []
    }
     let mynum = 0
     let soup = []
     for(let i = 0; i< array.length; i++){
       mynum = -array[i]
       if(mynum === array[i]){
         mynum+=-(array[i])
       }
       soup.push(mynum)
     }
     return soup;
   }