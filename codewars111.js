const getNumbers = s => {
    return s.split(' ').map((w, i) => ({
        c: w.replace(/\d/g, ''),
        d: +w.replace(/\D/g, ''),
        i
      }))
      .sort((a, b) => a.c.localeCompare(b.c) || a.i - b.i)
      .map(({ d }) => d);
  };
  
  const doMath = s => {
    const arr = getNumbers(s);
    const fns = [
      (a, b) => a + b,
      (a, b) => a - b,
      (a, b) => a * b,
      (a, b) => a / b,
    ];
    return Math.round(arr.reduce((acc, n, i) => fns[(i-1)%fns.length](acc, n)));
  };