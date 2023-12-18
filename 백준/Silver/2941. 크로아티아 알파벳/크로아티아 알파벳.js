let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("");

let check = "";

for (let i = 0; i < input.length - 1; i++) {
  check = input[i] + input[i + 1];

  if (check === "c=") {
    input.splice(i, 2, "c=");
  }
  if (check === "c-") {
    input.splice(i, 2, "c-");
  }
  if (input[i] + input[i + 1] + input[i + 2] === "dz=") {
    input.splice(i, 3, "dz=");
  }
  if (check === "d-") {
    input.splice(i, 2, "d-");
  }
  if (check === "lj") {
    input.splice(i, 2, "lj");
  }
  if (check === "nj") {
    input.splice(i, 2, "nj");
  }
  if (check === "s=") {
    input.splice(i, 2, "s=");
  }
  if (check === "z=") {
    input.splice(i, 2, "z=");
  }
}

console.log(input.length);
