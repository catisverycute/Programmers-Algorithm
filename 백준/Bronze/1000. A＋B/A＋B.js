let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let result = input[0].split(' ');
let a = parseInt(result[0]);
let b = parseInt(result[1]);
console.log(a+b);