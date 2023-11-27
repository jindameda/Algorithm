let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [n, x] = input[0].split(" ");
const a = input[1].split(" ");

const answer = a.filter((value) => Number(value) < x);

console.log(answer.join(" "));