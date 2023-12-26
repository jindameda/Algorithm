let info = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < info.length; i++) {
  let [a, b] = info[i].split(" ").map(Number);
  if ((a, b === 0)) {
    return;
  }
  if (a % b === 0) {
    console.log("multiple");
  } else if (b % a === 0) {
    console.log("factor");
  } else {
    console.log("neither");
  }
}
