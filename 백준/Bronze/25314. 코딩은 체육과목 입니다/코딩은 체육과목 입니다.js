const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' '); 

const num = parseInt(input[0])

for (let i = 1; i <=num; i++){
    if(i % 4 === 0) {
        console.log(i.length='long')
    } 
}   
console.log('int')