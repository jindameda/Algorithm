const info = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const n = +info.shift();
const arr = info.map((v) => v.split(" "));
arr.map((v) => (v[0] = Number(v[0])));
arr.sort((a, b) => {
  if (a[0] === b[0]) return 1;
  else return a[0] - b[0];
});

let answer = [];

for (let i = 0; i < n; i++) {
  answer.push(arr[i].join(" "));
}

console.log(answer.join("\n"));