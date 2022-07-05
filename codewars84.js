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