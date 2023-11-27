let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let answer = [];

for (let i = 0; i < input.length; i++) {
  const [a, b] = input[i].split(" ");
  if (a === "0" && b === "0") break;
  answer.push(parseInt(a) + parseInt(b));
}

console.log(answer.join("\n"));