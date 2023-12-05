let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let normal = [1, 1, 2, 2, 2, 8];
let answer = [];
for (let i = 0; i < normal.length; i++) {
  answer.push(normal[i] - input[i]);
}

console.log(answer.join(" "));