let info = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const one = info[0].split("");
const two = info[1].split("");
const three = info[2].split("");
const four = info[3].split("");
const five = info[4].split("");
let arr = [];

for (let i = 0; i < 16; i++) {
  if (
    one[i] !== undefined ||
    two[i] !== undefined ||
    three[i] !== undefined ||
    four[i] !== undefined ||
    five[i] !== undefined
  ) {
    arr.push(one[i]);
    arr.push(two[i]);
    arr.push(three[i]);
    arr.push(four[i]);
    arr.push(five[i]);
  }
}

console.log(arr.join(""));
