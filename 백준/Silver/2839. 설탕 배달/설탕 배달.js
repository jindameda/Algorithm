const kg = require("fs").readFileSync(0).toString().trim();

let result = [];

for (let i = 0; i <= 1000; i++) {
  for (let j = 0; j <= 1000; j++) {
    if (kg == 4 || kg == 7) return console.log(-1);
    if (kg % (3 * i + 5 * j) == 0 && kg == 3 * i + 5 * j) result.push(i + j);
  }
}

console.log(Math.min(...result));
