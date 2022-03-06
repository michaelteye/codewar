function paperwork(n, m) {
    let mute = 0
    if(n <0 || m< 0){
      return mute
    }else{
      mute = n*m
  }
    return mute
  }
// alternative solution
function paperwork(n, m) {
    if (m < 0 || n < 0) {
      return 0;
    }
    return m * n;
  }