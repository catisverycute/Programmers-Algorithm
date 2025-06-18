let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let size = Number(input[0]);

for(let i = 1; i <= size; i++){
    let [a, b] = input[i].split(" ").map(Number);
    console.log(`Case #${i}: ${a} + ${b} = ${a + b}`);
}