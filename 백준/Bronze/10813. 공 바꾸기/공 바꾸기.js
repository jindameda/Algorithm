let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ");
let arr = [];
arr.length = n;
for (let i = 1; i <= n; i++) {
  arr[i - 1] = i;
}

for (let a = 1; a <= m; a++) {
  let [i, j] = input[a].split(" ");
  [arr[i - 1], arr[j - 1]] = [arr[j - 1], arr[i - 1]];
}

console.log(arr.join(" "));