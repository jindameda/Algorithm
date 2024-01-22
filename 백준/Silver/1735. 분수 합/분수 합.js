let info = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const x = info[0].split(" ").map(Number);
const y = info[1].split(" ").map(Number);

const common = (x, y) => {
  let A = Math.max(x, y);
  let B = Math.min(x, y);

  while (A % B !== 0) {
    let r = A % B;

    if (r !== 0) {
      A = B;
      B = r;
    }
  }

  return B;
};

let d = common(x[1], y[1]);

let denominator = x[1] * y[1] * d;
let numerator = x[0] * y[1] * d + y[0] * x[1] * d;

let k = common(denominator, numerator);

if (k === 1) console.log(numerator, denominator);
else console.log(numerator / k, denominator / k);
