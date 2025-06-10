let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let size = Number(input[0]);

for(let i = 1; i <= size; i++){
    const [A, B] = input[i].split(" ").map(Number);
    console.log( A + B );
}