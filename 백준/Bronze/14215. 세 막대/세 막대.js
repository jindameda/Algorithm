const num = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const max = Math.max(...num);
const sum = num.reduce((a, b) => (a += b));
const rest = sum - Math.max(...num);

if (max < rest) console.log(sum);
else console.log(sum - (max - rest) - 1);
