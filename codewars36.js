// You are a(n) novice/average/senior/professional/world-class (choose one) Computer
//  Scientist and Web Developer who specialises in Javascript (choose the language of your choice).
//   One day, while you were away, your naughty little brother 
//   fiddles with your computer and somehow manages to disable the sort() method for arrays!



Array.prototype.sort = function () {
    for(var i=0;i<this.length-1;i++){
      for(var j=this.length-1;j>=i;j--){
        if(this[j]>this[j+1]){
          [this[j],this[j+1]]=[this[j+1],this[j]];
        }
      }
    }
    return this;
  }