let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let result1 = input[0].split(' ');
let result2 = input[1].split(' ');
let a = parseInt(result1[0]);
let b = parseInt(result1[1]);
console.log(a*b);
