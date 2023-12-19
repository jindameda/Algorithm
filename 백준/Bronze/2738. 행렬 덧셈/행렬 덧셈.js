let info = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(info[0].split(" ")[0]);
const M = Number(info[0].split(" ")[1]);

for (let i = 1; i <= N; i++) {
  let arr = info[i]
    .split(" ")
    .map(Number)
    .concat(info[N + i].split(" ").map(Number));
  let result = [];
  for (let j = 0; j < M; j++) {
    result.push(arr[j] + arr[M + j]);
  }
  console.log(result.join(" "));
}