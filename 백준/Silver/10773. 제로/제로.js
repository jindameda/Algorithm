const [K, ...arr] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

let stack = [];
let result = 0;

for (let i = 0; i < K; i++) {
  let query = arr[i];

  switch (query) {
    case "0":
      stack.pop();
      break;
    default:
      stack.push(query);
      break;
  }
}
for (let i = 0; i < stack.length; i++) {
  stack[i] = +stack[i];
  result += stack[i];
}
if (stack.length === 0) console.log(0);
else console.log(result);
