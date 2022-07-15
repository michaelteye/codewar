function orArrays(arr1, arr2, arr3=0){
    //your code here
        return arr1.map((x,i)=>x|(arr2[i]||arr3)).concat(arr2.slice(arr1.length).map(x=>x|arr3));
  
  }