const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();

const N = Number(input);
const cnt = parseInt(N / 4);
let long = "";

for (let i = 1; i <= cnt; i++) {
  long += "long ";
}

console.log(`${long}int`);