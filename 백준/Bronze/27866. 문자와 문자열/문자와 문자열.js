let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const strArr = input[0].split("");
const i = parseInt(input[1]);

console.log(strArr[i - 1]);