const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const a = parseInt(input[0]);
const b = parseInt(input[1]);

const str = String(b);
const mapfn = (arg) => Number(arg);
const newArr = Array.from(str, mapfn);

const one = newArr[2];
const ten = newArr[1];
const hundred = newArr[0];

console.log(String(a * one));
console.log(String(a * ten));
console.log(String(a * hundred));
console.log(String(a * b));