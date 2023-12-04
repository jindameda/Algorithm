let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const cnt = parseInt(input[0]);

for (let i = 1; i <= cnt; i++) {
  const str = input[i].split("");
  console.log(`${str[0]}${str.reverse()[0]}`);
}