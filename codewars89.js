
// Your task is to extend JavaScript Array object, with methods .first() and .last(), so you can get respectively first or last element of the array.

// var a = [2, 5, 7, 3 ,4];

// a.first();  // 2
// a.last();   // 4
Array.prototype.first = function() {
    return this[0];
  };
  
  Array.prototype.last = function() {
    return this[this.length-1];
  };

//Alternative solution.
Array.prototype.first = function() {
    if(this.length == 0){
      return undefined;
    }
    const copy = [...this];
    return copy.shift();
  };
  
  Array.prototype.last = function() {
    if(this.length == 0){
      return undefined;
    }
    const copy = [...this];
    return copy.pop();
  };