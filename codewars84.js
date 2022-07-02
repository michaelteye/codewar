class Animal{
    constructor(name, type){
      this.name = name
      this.type = type
    }
    toString(){
      return `${this.name}, ${this.type}`
    }
  }
  var dog = new Animal('Max', 'farm')
  dog.name ="checp"
  console.log(dog.toString())

//Alternative solution
var Animal = function (name, type) {
    var name = name;
    var type = type;
    this.toString = function () {
      return this.name + ' is a ' + this.type;
    };
    
     Object.defineProperty(this, 'name', {
      get: function () {
        return name;
      },
      set: function (n) {
        name = n;
      }
    })
    
    Object.defineProperty(this, 'type', {
      get: function () {
        return type;
      },
      set: function (t) {
        type = t;
      }
    })
   
  } 