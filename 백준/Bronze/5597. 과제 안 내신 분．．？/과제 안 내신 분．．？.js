const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./text.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const n = 30;
const m = input.map(Number);

let arr = new Array(n).fill().map((v, i) => i + 1);
let arr2 = arr.filter((x) => !m.includes(x));

console.log(arr2.join(" "));