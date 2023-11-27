let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const sec = input[1].split(" ").map(Number);
const max = Math.max(...sec);
const min = Math.min(...sec);
console.log(min, max);