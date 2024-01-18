const info = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const [N, M] = info.shift().split(" ").map(Number);

const hear = new Set();
for (let i = 0; i < N; i++) {
  hear.add(info[i]);
}

let answer = [];

for (let i = N; i < N + M; i++) {
  if (hear.has(info[i])) answer.push(info[i]);
}
answer.sort();

console.log(answer.length + "\n" + answer.join("\n"));