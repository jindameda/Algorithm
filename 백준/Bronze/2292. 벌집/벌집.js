const info = require("fs").readFileSync("/dev/stdin").toString().trim();

let sum = 0;
let arr = [1];

for (let i = 1; i < 20000; i++) {
  sum += 6 * i;
  arr.push(sum + 1);
}

for (let i = 0; i < arr.length; i++) {
  if (Number(info) === 1) {
    return console.log(1);
  } else if (arr[i] >= Number(info) && arr[i - 1] <= Number(info)) {
    return console.log(i + 1);
  }
}
