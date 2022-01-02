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

//alternative
function doMath(s){
    const sign = ['+','-','*','/']; 
    const tmp = s.split` `.sort((a,b) => a.replace(/\d/g,'').localeCompare( b.replace(/\d/g,'') ) || s.indexOf(a)-s.indexOf(b)).map((v,i) => v.replace(/[a-z]/g, '') );
    let res = tmp[0];
    for(let i = 1; i<tmp.length; i++)
       res = eval(res + sign[(i-1)%sign.length] + tmp[i]);
     return Math.round(res)
}