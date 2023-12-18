let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const number = Number(input[0]);
let cnt = number;
let word;

for (let i = 1; i <= number; i++) {
  word = input[i].split("");
  for (let j = 0; j < word.length; j++) {
    if (word[j] !== word[j + 1] && !!word.slice(j + 1).includes(word[j])) {
      cnt--;
      break;
    }
  }
}

console.log(cnt);