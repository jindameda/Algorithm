const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const x = parseInt(input[0]);
const n = parseInt(input[1]);
const calc = input.slice(2);

let check = 0;

for (let i = 0; i < n; i++) {
  let [a, b] = calc[i].split(" ");
  check += Number(a) * Number(b);
}
console.log(check === x ? "Yes" : "No");