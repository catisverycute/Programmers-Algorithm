let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let num = Number(input[0]);
let score = 0;
for(let i =1;  i <= num; i++){
    score += i;
}
console.log(score);