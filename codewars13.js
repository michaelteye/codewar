// Give you a function animal, accept 1 parameter:obj like this:

// {name:"dog",legs:4,color:"white"}

function animal(obj){
    let {color,name,legs} = obj;
    return `This ${color} ${name} has ${legs} legs.`
  }