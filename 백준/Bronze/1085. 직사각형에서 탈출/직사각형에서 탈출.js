const [x, y, w, h] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ");

const a = Math.abs(w - x);
const b = Math.abs(h - y);

console.log(Math.min(a, b, x, y));
