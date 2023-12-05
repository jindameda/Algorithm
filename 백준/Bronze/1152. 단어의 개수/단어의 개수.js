let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .filter((element) => element !== "");

console.log(input.length);
