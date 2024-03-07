const info = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const [N, M] = info[0].split(" ").map(Number);
info.shift();
const white = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];
const black = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];
let result = [];

const wStart = (x, y) => {
  let cnt = 0;

  for (let i = y; i < y + 8; i++) {
    for (let j = x; j < x + 8; j++) {
      if (info[i][j] !== white[i - y][j - x]) cnt++;
    }
  }

  return cnt;
};

const bStart = (x, y) => {
  let cnt = 0;

  for (let i = y; i < y + 8; i++) {
    for (let j = x; j < x + 8; j++) {
      if (info[i][j] !== black[i - y][j - x]) cnt++;
    }
  }

  return cnt;
};

for (let x = 0; x + 7 < M; x++) {
  for (let y = 0; y + 7 < N; y++) {
    result.push(wStart(x, y));
    result.push(bStart(x, y));
  }
}

console.log(Math.min(...result));