String.prototype.reverse=function(){
    var s='';
    for (var i=0; i<this.length; ++i)
      s+=this[this.length-1-i];
    return s;
  }