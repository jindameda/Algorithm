const info = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const [N, M] = info.shift().split(" ").map(Number);
const arr = info[0].split(" ").map(Number);
let newArr = [];

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      if (arr[i] + arr[j] + arr[k] <= M) {
        newArr.push(arr[i] + arr[j] + arr[k]);
      }
    }
  }
}

const minus = newArr.map((v) => M - v);
const result = minus.indexOf(Math.min(...minus));

if (newArr.includes(M)) return console.log(M);
console.log(newArr[result]);