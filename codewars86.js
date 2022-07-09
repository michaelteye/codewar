// Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

const combine = (...params) => params.reduce((a, b) => {
    for (const x in b) { a[x] = x in a ? a[x] + b[x] : b[x] };
    return a;
   }, {});