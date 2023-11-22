const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
 const input = require('fs').readFileSync(0).toString().split('\n');

const a = parseInt(input[0]);
const b = parseInt(input[1]);

if (a > 0 && b > 0) {
  console.log(1);
} else if (a < 0 && b > 0) {
  console.log(2);
} else if (a < 0 && b < 0) {
  console.log(3);
} else if (a > 0 && b < 0) {
  console.log(4);
} else {
  console.log("Wrong Number");
}