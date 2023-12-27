let [m, n] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const arr = Array(n - m + 1)
  .fill()
  .map((_, index) => m + index);

const solve = arr.filter((num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }

  return num > 1;
});

if (solve.length) {
  console.log(solve.reduce((sum, prime) => (sum += prime)));
  console.log(solve[0]);
} else {
  console.log(-1);
}