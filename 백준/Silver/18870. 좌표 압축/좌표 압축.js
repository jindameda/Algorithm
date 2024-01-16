const info = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const n = +info.shift();
const arr = info[0].split(" ").map(Number);

let newArr = [...arr];
let sort = newArr.sort((a, b) => a - b);
let sorted = [...new Set(sort)];

let obj = {};
sorted.forEach((e, index) => {
  obj[e] = index;
});

let answer = "";

for (let i = 0; i < n; i++) {
  answer += obj[arr[i]] + " ";
}

console.log(answer);
