// Write your code here...
Number.prototype.add= function(n){
    return this + n
  }
  Number.prototype.sub= function(n){
    return this - n
  }
  Number.prototype.mul= function(n){
    return this * n
  }
  Number.prototype.div= function(n){
    return this / n
  }
  Number.prototype.pow= function(n){
    return  this ** n
  }
  Number.prototype.sqr= function(){
    return Math.sqrt(this)
  }

// Alternative
(function(ops){
    Object.keys( ops ).forEach( op => { Number.prototype[op] = function(x){ return ops[op](this,x) } })
  })( {
    "add" : (a,b) => a + b,
    "sub" : (a,b) => a - b,
    "mul" : (a,b) => a * b,
    "div" : (a,b) => a / b,
    "pow" : (a,b) => Math.pow(a,b),
    "sqr" : a => Math.sqrt(a),
  } );