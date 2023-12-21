const info = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const T = info.shift();

for (let i = 0; i < T; i++) {
  let quarter = Math.trunc(info[i] / 25);
  let dime = Math.trunc((info[i] % 25) / 10);
  let nickel = Math.trunc(((info[i] % 25) % 10) / 5);
  let penny = Math.trunc((((info[i] % 25) % 10) % 5) / 1);

  console.log(quarter, dime, nickel, penny);
}
