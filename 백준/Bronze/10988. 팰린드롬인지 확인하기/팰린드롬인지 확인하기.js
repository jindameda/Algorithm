let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("");

let normal = input.join("");
let reverse = input.reverse().join("");
console.log(normal === reverse ? "1" : "0");