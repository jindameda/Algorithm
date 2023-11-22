const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

const leapYear = Number(input);

if (
  (leapYear % 4 === 0 && leapYear % 100 !== 0) ||
  (leapYear % 4 === 0 && leapYear % 400 === 0)
) {
  console.log(1);
} else {
  console.log(0);
}