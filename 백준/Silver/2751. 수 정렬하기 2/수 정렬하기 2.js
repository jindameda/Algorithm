const info = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");
const cnt = info.shift();
const result = info.sort((a, b) => a - b);
console.log(result.join("\n"));