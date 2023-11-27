const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let answer = "";

for (let i = 1; i <= input[0]; i++) {
  const [a, b] = input[i].split(" ");
  answer += `Case #${i}: ${parseInt(a)} + ${parseInt(b)} = ${parseInt(a) + parseInt(b) + "\n"}`;
}

console.log(answer);