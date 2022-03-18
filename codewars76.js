function past(h, m, s){
    const setTime = new Date().setHours(h, m, s);
    const midnight = new Date().setHours(0, 0, 0);
    
    return Math.round(setTime - midnight);
  }

// Alternate solution
function past(h, m, s){
    return ((h*3600)+(m*60)+s)*1000;
  }

// alternate
function past(h, m, s){
    var hours = h * 60 * 60 * 1000;
    var minutes = m * 60 * 1000;
    var seconds = s * 1000;
    
    return hours + minutes + seconds;
  }