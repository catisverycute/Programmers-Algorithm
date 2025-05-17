let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let size = Number(input[0]);
let number = input[1].split("").map(Number);
let answer = 0;
for(let i = 0; i < size; i++){
    answer += number[i]
}
console.log(answer)