const n = Number(require("fs").readFileSync(0).toString().trim());

let divisor = [];
for (let i = 1; i < n; i++) {
  if (n % i === 0) divisor.push(i);
}

if (divisor.length === 1) {
  return console.log(n);
}

const f = (integer, i = 1) => {
  while (i < divisor.length) {
    if (integer % divisor[i] === 0) {
      integer = integer / divisor[i];
      console.log(divisor[i]);
      if (integer === 1) {
        f(integer, i);
        break;
      }
    } else i++;
  }
};

f(n);
