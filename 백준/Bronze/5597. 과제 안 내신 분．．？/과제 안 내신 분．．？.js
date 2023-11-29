let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 1; i <= 30; i++) {
  if (input.includes(`${i}`) == false) {
    console.log(i);
  }
}