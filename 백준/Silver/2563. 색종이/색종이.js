let info = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [N] = info.shift();
const arr = new Array(100).fill().map((v) => new Array(100).fill(false));

for (let i = 0; i < N; i++) {
  let [x, y] = info[i];

  for (let a = 0; a < 10; a++) {
    for (let b = 0; b < 10; b++) {
      arr[x + a][y + b] = true;
    }
  }
}

const result = arr.reduce((accu, curr) => {
  for (el of curr) {
    if (el) accu++;
  }
  return accu;
}, 0);

console.log(result);
