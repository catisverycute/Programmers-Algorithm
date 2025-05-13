let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let num = Number(input[0]);
let arr = input[1].split(" ").map(x => Number(x));
let maxScore = Math.max(...arr);
for(let i = 0; i < num; i++){
    arr[i] = (arr[i]/maxScore)*100
}

let total = 0;
for(let j = 0; j < num; j++){
    total += arr[j]
}
console.log(total/num);