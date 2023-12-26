let [n, k] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map(Number);
let q = 0;
let arr = [];
while (++q <= n) {
  n % q === 0 ? arr.push(q) : null;
}
console.log(arr[k - 1] === undefined ? 0 : arr[k - 1]);
