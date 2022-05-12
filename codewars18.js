// Coding in function colorOf. function accept 3 parameter:r g b. It means value of color red green and blue. the value range is 0-255.

// Use toString(16) Convert numbers r g b to hex string form. at last, combine them to a web color code and return it.

// the color code should starting with "#". and then use 2 characters per color.

// for example:


function colorOf(r,g,b){
    //coding here
    let sip = "#"
    let sits = sip+r.toString(16).padStart(2,0)+g.toString(16).padStart(2,0)+b.toString(16).padStart(2,0)
    return sits
    
  }