const info = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const [N, k] = info.shift().split(" ").map(Number);

console.log(info[0].split(" ").sort((a, b) => a - b)[N - k]);