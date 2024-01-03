const n = require("fs").readFileSync(0).toString().trim();

let num = BigInt(n);

console.log(`${num * num * num}\n3`);
