const note = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const n = +note.shift();
const arr = note.map((v) => v.split(" ").map(Number));
arr.sort((a, b) => {
  if (a[0] === b[0]) return a[1] - b[1];
  else return a[0] - b[0];
});

let ans = [];

for(let i = 0; i < n; i++){
    let answer = arr[i].join(" ");
    ans.push(answer);
}

console.log(ans.join("\n"));