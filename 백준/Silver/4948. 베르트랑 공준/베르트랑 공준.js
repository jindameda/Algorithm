const n = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

n.pop();
const doubleN = n.map((v) => v * 2);
const prime = { 1: true };

for (let i = 0; i < doubleN.length; i++) {
  for (let j = 2; j <= Math.sqrt(doubleN[i]); j++) {
    if (prime[j]) continue;
    for (let k = j ** 2; k <= doubleN[i]; k += j) {
      prime[k] = true;
    }
  }
}

let arr = [];
let ans = [];

for (let i = 0; i < n.length; i++) {
  for (let j = n[i] + 1; j <= doubleN[i]; j++) {
    if (!prime[j]) {
      arr.push(j);
    }
    if (j === doubleN[i]) {
      ans.push(arr.length);
      arr = [];
    }
  }
}

console.log(ans.join("\n"));