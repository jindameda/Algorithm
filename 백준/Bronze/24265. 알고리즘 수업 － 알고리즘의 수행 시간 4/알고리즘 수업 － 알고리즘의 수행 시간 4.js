const n = require("fs").readFileSync(0).toString().trim();

let sum = 0;

for (let i = 1; i < n; i++) {
  sum += i;
}

console.log(`${sum}\n2`);