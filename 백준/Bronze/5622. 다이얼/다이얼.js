let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("");

let alpha = [];
for (let i = 65; i <= 90; i++) {
  alpha.push(String.fromCharCode(i));
}

let dial = [];
let answer = 0;
for (let i = 1; i <= 8; i++) {
  if (i == 6 || i == 8) {
    dial.push(alpha.splice(0, 4));
  } else {
    dial.push(alpha.splice(0, 3));
  }
  for (let j = 0; j < input.length; j++) {
    if (dial[i - 1].includes(input[j])) {
      answer += i + 2;
    }
  }
}
console.log(answer);
