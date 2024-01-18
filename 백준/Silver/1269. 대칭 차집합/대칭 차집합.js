const info = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const [N, M] = info.shift().split(" ").map(Number);
const A = new Set(info[0].split(" ").map(Number));
const B = new Set(info[1].split(" ").map(Number));

let arr = [];

for (let i of A) {
  if (!B.has(i)) arr.push(i);
}

for (let i of B) {
  if (!A.has(i)) arr.push(i);
}

console.log(arr.length);