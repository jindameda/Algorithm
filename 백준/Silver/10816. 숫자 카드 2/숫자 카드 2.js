const info = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const [N, M] = [+info[0], +info[2]];
const sg = info[1]
  .split(" ")
  .map(Number)
  .reduce((accu, curr) => {
    accu.set(curr, (accu.get(curr) || 0) + 1);
    return accu;
  }, new Map());
const num = info[3].split(" ").map(Number);

let answer = "";

for (let i of num) {
  if (sg.has(i)) answer += sg.get(i) + " ";
  else answer += 0 + " ";
}

console.log(answer);