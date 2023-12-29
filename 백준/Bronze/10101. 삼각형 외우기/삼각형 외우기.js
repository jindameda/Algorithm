const ang = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const setAng = [...new Set(ang)];

if (ang.reduce((accu, curr) => (accu += curr)) === 180) {
  if (setAng.length == 1) console.log("Equilateral");
  if (setAng.length == 2) console.log("Isosceles");
  if (setAng.length == 3) console.log("Scalene");
} else console.log("Error");