function compare(s1, s2) {
    // declaring the sum
    let sum1 = 0;
    let sum2 = 0;
    if(s1 !== null && s1 !== ""){
      for(let i = 0; i < s1.length; i++){
        if(s1.toUpperCase().charCodeAt(i) < 65 || s1.toUpperCase().charCodeAt(i)>90){
          sum1 = 0;
          break
        }
        sum1 += s1.toUpperCase().charCodeAt(i)
      }
    }
    if(s2 !== null && s2 !== ""){
      for(let i = 0; i < s2.length; i++){
        if(s2.toUpperCase().charCodeAt(i) < 65 || s2.toUpperCase().charCodeAt(i) > 90){
          sum2 = 0;
          break
        }
        sum2 += s2.toUpperCase().charCodeAt(i)
      }
    }
        return sum1 == sum2
  }