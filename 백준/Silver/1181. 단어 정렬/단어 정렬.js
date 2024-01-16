const info = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const n = +info.shift();
info.sort((a, b) => a.length - b.length);

let arr = [...new Set(info)];
arr.sort((a, b) => {
  if (a.length === b.length) {
    if (a < b) return -1;
  }
});

console.log(arr.join("\n"));