let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const cnt = parseInt(input[0]);
let str = [];

for (let i = 1; i <= cnt; i++) {
  const [r, s] = input[i].split(" ");
  str = s.split("");
  const answer = str.map((element) => element.repeat(r));
  console.log(answer.join(""));
}