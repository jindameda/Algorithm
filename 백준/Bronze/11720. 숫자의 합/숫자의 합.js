let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const cnt = parseInt(input[0]);
const arr = input[1].split("").map(Number);
let sum = 0;

for (let i = 0; i < cnt; i++) {
  sum += arr[i];
}

console.log(sum);