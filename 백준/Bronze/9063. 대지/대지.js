const info = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");
const cnt = Number(info.shift());

let x = [];
let y = [];
for (let i = 0; i < cnt; i++) {
  let [a, b] = info[i].split(" ").map(Number);
  x.push(a);
  y.push(b);
}

const row = Math.max(...x) - Math.min(...x);
const column = Math.max(...y) - Math.min(...y);

console.log(row * column);