let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let [a, b, c] = input.map(Number);

console.log(a + b + c);
