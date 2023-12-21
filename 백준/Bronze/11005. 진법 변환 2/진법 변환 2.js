const info = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let n = Number(info[0]);
const b = Number(info[1]);
let result = [];

while (n >= b) {
  let remainder = n % b;
  let quotient = Math.trunc(n / b);

  if (remainder >= 10) {
    result.push(String.fromCharCode(remainder + 55));
  } else {
    result.push(remainder);
  }

  n = quotient;
}

if (n >= 10) {
  result.push(String.fromCharCode(n + 55));
} else {
  result.push(n);
}

console.log(result.reverse().join(""));
