let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .toUpperCase()
  .trim()
  .split("");

const cnt = input.reduce((accu, curr) => {
  accu[curr] = (accu[curr] || 0) + 1;
  return accu;
}, {});

const key = Object.keys(cnt);
const value = Object.values(cnt);

let duplicates = [];
for (let i = 0; i < value.length; i++) {
  if (value[i] === Math.max(...value)) {
    duplicates.push(value[i]);
  }
}

if (duplicates.length > 1) {
  console.log("?");
}
if (duplicates.length === 1) {
  console.log(key[value.indexOf(Math.max(...value))]);
}
