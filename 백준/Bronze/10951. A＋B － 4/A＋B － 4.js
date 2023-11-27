let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  const [a, b] = input[i].split(" ");
  console.log(Number(a) + Number(b));
}