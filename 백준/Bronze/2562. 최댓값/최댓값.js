let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let arr = input.map(Number);
let value = 0;

let maxValue = arr.reduce((acc, curr) => Math.max(acc, curr), value);

console.log(maxValue);
console.log(arr.indexOf(maxValue) + 1);