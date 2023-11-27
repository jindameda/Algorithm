let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map(Number);
const max = Math.max(...input);
const cnt = input.indexOf(max) + 1;
console.log(max, cnt);