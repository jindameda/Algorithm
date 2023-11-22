const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

const [hour, minute] = input;
const setMinute = Number(minute) - 45;
const setHour = Number(hour) - 1;

if (setMinute < 0) {
  if (setHour < 0) {
    console.log(setHour + 24, setMinute + 60);
    return;
  }
  console.log(setHour, 60 + setMinute);
} else if (setMinute >= 0) {
  console.log(hour, String(setMinute));
}