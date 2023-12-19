let info = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let maxArr = [];
let maxColumn = [];

for (let i = 0; i < info.length; i++) {
  let rowArr = info[i].split(" ").map(Number);
  let rowMax = rowArr.reduce((a, b) => {
    return Math.max(a, b);
  });
  maxArr.push(rowMax);
  maxColumn.push(rowArr.indexOf(rowMax));
}

const max = maxArr.reduce((a, b) => {
  return Math.max(a, b);
});
const row = maxArr.indexOf(max) + 1;
const column = maxColumn[row - 1] + 1;

console.log(`${max}\n${row} ${column}`);
