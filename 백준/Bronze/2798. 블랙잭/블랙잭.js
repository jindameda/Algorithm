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

const result = newArr
  .map((v) => M - v)
  .indexOf(Math.min(...newArr.map((v) => M - v)));

if (newArr.includes(M)) return console.log(M);
console.log(newArr[result]);