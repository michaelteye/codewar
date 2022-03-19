function past(h, m, s){
    const setTime = new Date().setHours(h, m, s);
    const midnight = new Date().setHours(0, 0, 0);
    
    return Math.round(setTime - midnight);
  }

// Alternate solution
function past(h, m, s){
    return ((h*3600)+(m*60)+s)*1000;
  }