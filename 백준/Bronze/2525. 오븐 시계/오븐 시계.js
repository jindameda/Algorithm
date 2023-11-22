const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev?stdin" : "./input.txt";
let input = fs.readFileSync(0).toString().split("\n");

const h = Number(input[0].split(" ")[0]);
const m = Number(input[0].split(" ")[1]);
const t = Number(input[1]);
const oneM = m + t;
const oneH = h + parseInt((m + t) / 60);

if (oneM >= 60) {
  if (oneH >= 24) {
    console.log(oneH - 24, oneM % 60);
    return;
  }
  console.log(oneH, oneM % 60);
} else if (oneM < 60) {
  console.log(oneH, oneM);
}