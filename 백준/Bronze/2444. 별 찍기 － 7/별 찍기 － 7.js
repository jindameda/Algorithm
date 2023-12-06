let input = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

const answer = (input) => {
  result = [];
  for (let i = 1; i <= input; i++) {
    let gap = " ".repeat(input - i);
    let star = "*".repeat(2 * i - 1);
    result.push(gap + star);
  }
  for (let i = input - 1; i >= 1; i--) {
    let gap = " ".repeat(input - i);
    let star = "*".repeat(2 * i - 1);
    result.push(gap + star);
  }
  return result.join("\n");
};

console.log(answer(input));