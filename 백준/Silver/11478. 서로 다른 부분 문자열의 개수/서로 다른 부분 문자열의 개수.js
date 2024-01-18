const info = require("fs").readFileSync(0).toString().trim();

const func = (str, start = 0, finish = 1) => {
  let arr = [];
  let n = 2;

  while (n <= str.length) {
    arr.push(str.substring(start, finish));
    finish++;
    start++;
    if (finish > str.length) {
      start = 0;
      finish = n++;
    }
    if (start == 0 && finish == str.length) break;
  }
  arr.push(str);

  return arr;
};

console.log([...new Set(func(info))].length);