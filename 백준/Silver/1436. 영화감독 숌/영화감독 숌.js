const taxis = Number(
  require("fs").readFileSync(0).toString().trim()
);
let newArr = [];

for (let i = 666; newArr.length < taxis; i++) {
  let arr = [i.toString().replace("666", "six")];
  for (let j = 0; j < arr.length; j++) {
    if (arr[j].includes("six")) newArr.push(arr[j]);
  }
}

console.log(newArr[taxis - 1].replace("six", "666"));