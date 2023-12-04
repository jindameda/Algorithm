let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const cnt = parseInt(input[0]);
const score = input[1].split(" ").map(Number);
const highest = Math.max(...score);
let sum = 0;
for (let i = 0; i < score.length; i++) {
  sum += score[i];
}
const fake = (sum / cnt / highest) * 100;

console.log(fake);