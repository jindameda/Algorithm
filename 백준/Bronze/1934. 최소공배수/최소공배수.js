const info = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const T = +info.shift();

for (let i = 0; i < T; i++) {
  let [a, b] = info[i].split(" ").map(Number);
  let A = Math.max(a, b);
  let B = Math.min(a, b);

  while (A % B !== 0) {
    let r = A % B;

    if (A % B !== 0) {
      A = B;
      B = r;
    }
  }
    
  let result = (a * b) / B;
  console.log(result);
}