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

//alternative solutions
function greet(name){
    return name === "Johnny" ? "Hello, my love!" : "Hello, " + name + "!";
}