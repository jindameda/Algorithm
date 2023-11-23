const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let caseCount = parseInt(input[0]);
let testCase = input.slice(1);

for (let i = 0; i < caseCount; i++) {
  let one = testCase[`${i}`].split(" ");
  let a = parseInt(one[0]);
  let b = parseInt(one[1]);
  console.log(a + b);
}