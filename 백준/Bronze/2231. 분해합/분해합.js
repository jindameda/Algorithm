let num = require("fs").readFileSync(0).toString().trim();
const len = num.split("").length;
num = Number(num);
const min = num - 9 * len;
let arr = [];
for (let i = Number(min); i < num; i++) {
  if (
    i +
      i
        .toString()
        .split("")
        .map(Number)
        .reduce((a, b) => (a += b)) ===
    num
  ) {
    arr.push(i);
    return console.log(arr[0]);
  }
}
if (arr.length === 0) console.log(0);