let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const sec = input[1].split(" ");
let good = "";

for (let i = 0; i < sec.length; i++) {
  num = sec[i];
  if (num === input[2]) {
    good += Number(num === input[2]);
  }
}

console.log(good.length);