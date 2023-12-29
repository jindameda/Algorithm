const coords = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

let coordX = [];
let coordY = [];

for (let i = 0; i < coords.length; i++) {
  let [x, y] = coords[i].split(" ").map(Number);
  coordX.push(x);
  coordY.push(y);
}

const setX = [...new Set(coordX)];
const setSumX = coordX.reduce((a, b) => (a += b));
const sumX = setX[0] * 2 + setX[1] * 2;

const setY = [...new Set(coordY)];
const setSumY = coordY.reduce((a, b) => (a += b));
const sumY = setY[0] * 2 + setY[1] * 2;

console.log(sumX - setSumX, sumY - setSumY);