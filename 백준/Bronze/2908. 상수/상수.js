let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

let reverse = [];

for (let i = 0; i < input.length; i++) {
  reverse.push(input[i].split("").reverse().join(""));
}
reverse.map(Number);

let max = reverse.reduce(function (a, b) {
  return Math.max(a, b);
}, -Infinity);

console.log(max);