let arr = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => [Number(v)]);

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 1; j < arr[i][0]; j++) {
    if (arr[i][0] % j === 0) {
      arr[i].push(j);
    }
  }
  const n = arr[i].shift();
  const sum = arr[i].reduce((accu, curr) => {
    accu += curr;
    return accu;
  });
  console.log(
    sum === n ? `${n} = ${arr[i].join(" + ")}` : `${n} is NOT perfect.`
  );
}