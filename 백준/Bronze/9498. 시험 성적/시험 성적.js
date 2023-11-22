const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

const score = Number(input);

if (90 <= score && score <= 100) {
  console.log("A");
} else if (80 <= score && score < 90) {
  console.log("B");
} else if (70 <= score && score < 80) {
  console.log("C");
} else if (60 <= score && score < 70) {
  console.log("D");
} else if (0 <= score && score < 60) {
  console.log("F");
} else {
  console.log("Something Wrong");
}