function solution(pairs){
    // TODO: complete
    let holder = []
    for(var valpai in pairs){
      holder.push((valpai+ ' = ' +pairs[valpai]))
    }
    return holder.join(',')
  }
  