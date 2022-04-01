// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7


function basicOp(operation, value1, value2)
{
  // Code
  let myadd = value1 + value2
  let mysub = value1 - value2
  let mymul = value1 * value2
  let mydiv = value1 / value2
  if(operation === '+'){
    return myadd
  }
  if(operation === '-'){
    return mysub
  }
  if(operation === '*'){
    return mymul
  }
  if(operation === '/'){
    return mydiv
  }
}

// using the switch case
function basicOp(operation, value1, value2)
{
  // Code
  let myadd = value1 + value2
  let mysub = value1 - value2
  let mymul = value1 * value2
  let mydiv = value1 / value2

    switch(operation){
        case '+':
          return myadd
        break
        case '-':
          return mysub
        break
        case '*':
          return mymul
        break
        case '/':
          return mydiv
        break
        default: 
          return'nothing'
    }
}

//Alternative
function basicOp(operation, value1, value2)
{
  var cases = {
    '+': value1 + value2,
    '-': value1 - value2,
    '*': value1 * value2,
    '/': value1 / value2
  };
  return cases[operation]
}