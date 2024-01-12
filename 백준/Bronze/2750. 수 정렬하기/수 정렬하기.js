const info = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

let cnt = info.shift();

console.log(info.sort((a, b) => a - b).join("\n"));