function greet(name){
    if(name == "Johnny"){
      return "Hello, my love!";
      }else{
        return "Hello, " + name + "!";
      }
  }

// alternative solution
function greet(name){
    return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
  }