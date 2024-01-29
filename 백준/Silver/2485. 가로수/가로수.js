let info = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const N = info.shift(0);
let minus = [];

for (let i = 0; i < N - 1; i++) {
  minus.push(info[i + 1] - info[i]);
}

const gcd = (arr) => {
  let a = arr[1];
  let b = arr[0];

  while (a % b !== 0) {
    let r = a % b;

    if (a % b !== 0) {
      a = b;
      b = r;
    }
  }

  if (arr.length > 2) {
    arr.splice(0, 2, b);
    return gcd(arr);
  } else return b;
};

console.log((info[N - 1] - info[0]) / gcd(minus) + 1 - N);
