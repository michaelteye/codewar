var foo;

foo = function(arg) {
  if (arg) console.log(arg);
  else foo('name required');
}

foo('Akinjide');
foo();