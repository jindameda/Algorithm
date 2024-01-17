const info = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" "));

const n = +info.shift();
let reco = new Map(info.map((el) => [el[0], el[1]]));

let result = [];

for (let key of reco.keys()) {
  if (reco.get(key) !== "leave") result.push(key);
}

result.sort().reverse();

console.log(result.join("\n"));
