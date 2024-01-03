const n = Number(require("fs").readFileSync(0).toString().trim());

let num = (BigInt(n - 2) * BigInt(n - 1) * BigInt(n)) / BigInt(6);

console.log(`${num}\n3`);