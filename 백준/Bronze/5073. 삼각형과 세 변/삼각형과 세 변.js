const info = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

let arr = [];
let newArr = [];

for (let i = 0; i < info.length - 1; i++) {
  arr.push(info[i].split(" ").map(Number));
  let max = Math.max(...arr[i]);
  let rest = arr[i].reduce((a, b) => (a += b)) - max;
  if (max < rest) {
    newArr = [...new Set(arr[i])];
    if (newArr.length === 1) console.log("Equilateral");
    if (newArr.length === 2) console.log("Isosceles");
    if (newArr.length === 3) console.log("Scalene");
  } else console.log("Invalid");
}