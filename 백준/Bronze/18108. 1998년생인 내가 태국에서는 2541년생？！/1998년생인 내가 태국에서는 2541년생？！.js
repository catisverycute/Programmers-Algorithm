let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let date = Number(input[0]);
console.log(date - 543);