let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);

let basket = [];
for (let x = 1; x <= N; x++) {
  basket.push(x);
}

for (let x = 1; x <= M; x++) {
  const [i, j] = input[x].split(" ").map(Number);
  let arr = [];
  for (let a = i - 1; a < j; a++) {
    arr.push(basket[a]);
  }
  arr.reverse();
  basket.splice(i - 1, j - i + 1, ...arr);
}

console.log(basket.join(" "));