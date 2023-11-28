let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ");
let arr = [];
arr.length = n;
arr.fill(0);

for (let a = 1; a <= m; a++) {
  [i, j, k] = input[a].split(" ");
  arr.fill(parseInt(k), i - 1, j);
}

console.log(arr.join(" "));