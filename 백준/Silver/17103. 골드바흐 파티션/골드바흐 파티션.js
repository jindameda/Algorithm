const info = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const T = info.shift();
const max = Math.max(...info);

let prime = new Array(max + 1).fill(true);
prime[0] = prime[1] = false;

for (let i = 2; i <= max / 2; i++) {
  if (prime[i]) {
    for (let j = 2; j <= max / i; j++) {
      prime[i * j] = false;
    }
  }
}

let ans = "";

info.forEach((item) => {
  let cnt = 0;

  for (let i = 2; i <= item / 2; i++) {
    if (prime[i] && prime[item - i]) cnt++;
  }

  ans += `${cnt}\n`;
});

console.log(ans);