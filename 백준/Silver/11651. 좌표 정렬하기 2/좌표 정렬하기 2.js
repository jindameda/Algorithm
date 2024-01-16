const note = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const n = +note.shift();
const arr = note.map((v) => v.split(" ").map(Number));

arr.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  else return a[1] - b[1];
});

let answer = [];

for (let i = 0; i < n; i++) {
  answer.push(arr[i].join(" "));
}

console.log(answer.join("\n"));