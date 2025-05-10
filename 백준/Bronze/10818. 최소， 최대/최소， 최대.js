let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let num = input[1].split(" ").map(Number);

let min = Math.min(...num);
let max = Math.max(...num);

console.log(min + " " + max);