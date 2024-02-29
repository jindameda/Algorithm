const [M, N] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const isPrime = (num) => {
  if (num === 1) return;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return;
  }
  return console.log(num);
};

for (let i = M; i <= N; i++) {
  isPrime(i);
}