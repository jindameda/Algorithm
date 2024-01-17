const info = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const [N, M] = [+info[0], +info[2]];
const [sg, num] = [
  new Set(info[1].split(" ").map(Number)),
  info[3].split(" ").map(Number),
];

let answer = "";

for (let i of num) {
  if (sg.has(i)) answer += 1 + " ";
  else answer += 0 + " ";
}

console.log(answer);
