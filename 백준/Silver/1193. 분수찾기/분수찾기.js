const info = require("fs").readFileSync("/dev/stdin").toString().trim();
let arr = [];
f = (pivot = +pivot, num = 1, sum = 1) => {
  if (pivot === 1) return 2;
  sum += num;
  if (sum > pivot) {
    return num + 1;
  } else {
    return arr.push(sum), f(pivot, ++num, sum);
  }
};

f(info);

let start = [arr.reverse()[0]];

for (let i = 1; start[0] + i <= Number(info); i++) {
  start.push(start[0] + i);
}

let deno = 0;
let nume = 0;
let result = [];
for (let i = 1; i < arr.length + 2; i++) {
  deno = i;
  nume = arr.length - i + 2;
  result.push(deno, nume);
}

if (Number(info) === 1) return console.log("1/1");

if (arr.length % 2 === 0) {
  console.log(
    `${result[start.indexOf(Number(info)) * 2 + 1]}/${
      result[start.indexOf(Number(info)) * 2]
    }`
  );
} else {
  console.log(
    `${result[start.indexOf(Number(info)) * 2]}/${
      result[start.indexOf(Number(info)) * 2 + 1]
    }`
  );
}
