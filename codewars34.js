// Define a circular object circular such that the following are true:

// circular.value === "Hello World"
// circular === circular.self
// circular.self === circular.self.self
// ... and so on.

var foo;

foo = function(arg) {
  if (arg) console.log(arg);
  else foo('name required');
}

foo('Akinjide');
foo();