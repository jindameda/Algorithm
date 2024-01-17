const info = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const [N, M] = info.shift().split(" ").map(Number);

let name = new Map();
for (let i = 0; i < N; i++) {
  name.set(info[i], i + 1);
}

let que = [];
for (let i = N; i < N + M; i++) {
  que.push(info[i]);
}

for (let i of que) {
  console.log(name.has(i) ? name.get(i) : info[+i - 1]);
}
