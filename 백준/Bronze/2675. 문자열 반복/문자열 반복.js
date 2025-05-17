let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let testCase = Number(input[0]);
let answer = "";

for(let i =1;  i <= testCase; i++){
    let [n, str] = input[i].split(" ");

    for(let x of str){
        answer += x.repeat(n)
    }
    answer += "\n"
}
console.log(answer);