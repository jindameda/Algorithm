const info = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const [a, b] = info.shift().split(" ").map(Number);
const [c, n] = info;

let isTrue = true;

for (let i = n; i <= 100; i++) {
  let f = a * i + b;
  if (f <= c * i == false) isTrue = false;
  if (!isTrue) break;
}

if (isTrue) {
  console.log(1);
} else {
  console.log(0);
}
