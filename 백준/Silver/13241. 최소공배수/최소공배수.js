let [a, b] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let A = a;
let B = b;

while (A % B !== 0) {
  let r = A % B;

  if (r !== 0) {
    A = B;
    B = r;
  }
}

console.log((a * b) / B);