const fs = require("fs");
const [size, ...matrices] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let result = "";

const [n, m] = size.split(" ").map((e) => +e);
const firstMatrix = [];
const secondMatrix = [];

for (let i = 0; i < matrices.length; i++) {
  if (i < n) {
    firstMatrix.push(matrices[i].split(" ").map((e) => +e));
  } else {
    secondMatrix.push(matrices[i].split(" ").map((e) => +e));
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    result += `${firstMatrix[i][j] + secondMatrix[i][j]} `;
  }
  result += "\n";
}

console.log(result);