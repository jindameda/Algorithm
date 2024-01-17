const info = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const [N, M] = info.shift().split(" ").map(Number);
let S = new Set();

for (let i = 0; i < N; i++) {
  S.add(info[i]);
}

let result = 0;

for (let i = N; i < N + M; i++) {
  if (S.has(info[i])) result++;
}

console.log(result);
