const info = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let sum = info.reduce((accu, curr) => (accu += curr));

console.log(sum / info.length);

console.log(info.sort((a, b) => a - b)[2]);
