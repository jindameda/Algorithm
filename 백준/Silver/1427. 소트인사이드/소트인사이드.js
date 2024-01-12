const info = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("")
  .map(Number)
  .sort((a, b) => b - a)
  .join("");

console.log(info);