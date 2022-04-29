// Some people really wonder why JavaScript arrays don't have a remove function to remove an element.

// Go ahead and make one.



Array.prototype.remove = function( index ){
    if(typeof index !== 'number' || index > this.length - 1 || index < 0) return this;
    this.splice(index, 1);
    return this;
  }