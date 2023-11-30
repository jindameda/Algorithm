let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let remainder = [];

for (let i = 0; i < 10; i++) {
  remainder.push(input[i] % 42);
}

const set = new Set(remainder);
const newArr = [...set];

console.log(newArr.length);